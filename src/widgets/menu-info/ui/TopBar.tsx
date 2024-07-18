"use client";

import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();
  return (
    <div className="fixed left-0 flex w-full h-[32px] pl-[14px] pr-[12px] py-1 justify-center items-center gap-[290px]">
      <button className="w-[20px] h-[20px]" onClick={router.back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.9207 2.76769C14.118 2.97698 14.1083 3.30661 13.899 3.50394L7.0093 9.99999L13.899 16.496C14.1083 16.6934 14.118 17.023 13.9207 17.2323C13.7234 17.4416 13.3937 17.4513 13.1845 17.2539L5.89278 10.3789C5.78841 10.2805 5.72925 10.1434 5.72925 9.99999C5.72925 9.85654 5.78841 9.71945 5.89278 9.62104L13.1845 2.74604C13.3937 2.54871 13.7234 2.5584 13.9207 2.76769Z"
            fill="#262626"
          />
        </svg>
      </button>
      <div className="w-[24px] h-[24px] bg-[rgba(251, 251, 251, 0.00)]"></div>
    </div>
  );
}
