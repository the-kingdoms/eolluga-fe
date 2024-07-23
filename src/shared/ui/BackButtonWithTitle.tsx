"use client";

import { useRouter } from "next/navigation";

export default function BackButtonWithTitle({ title }: { title: string }) {
  const router = useRouter();
  return (
    <div className="relative z-50 flex h-[48px] items-center justify-center">
      <button
        type="button"
        aria-label="뒤로가기"
        className="absolute left-[14px]"
        onClick={router.back}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9205 2.76769C14.1178 2.97698 14.1081 3.30661 13.8988 3.50394L7.00906 9.99999L13.8988 16.496C14.1081 16.6934 14.1178 17.023 13.9205 17.2323C13.7231 17.4416 13.3935 17.4513 13.1842 17.2539L5.89254 10.3789C5.78817 10.2805 5.729 10.1434 5.729 9.99999C5.729 9.85654 5.78817 9.71945 5.89254 9.62104L13.1842 2.74604C13.3935 2.54871 13.7231 2.5584 13.9205 2.76769Z"
            fill="#262626"
          />
        </svg>
      </button>
      <h1 className="absolute text-lg font-medium">{title}</h1>
    </div>
  );
}
