import Link from "next/link";

export default function ViewOriginInfoButton({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: number;
}) {
  return (
    <button
      type="button"
      className="ml-auto w-fit rounded-full border border-[#A8A8A8] px-[16px] py-[9px] text-sm font-bold text-[#6f6f6f]"
    >
      <Link
        href={`/${storeId}/${tableId}/menu/origin-info`}
        className="flex items-center space-x-[4px]"
      >
        <span aria-label="원산지 정보">원산지 정보</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.69684 13.7858C4.53897 13.6184 4.54673 13.3547 4.71416 13.1968L10.226 7.99998L4.71416 2.80314C4.54673 2.64528 4.53897 2.38157 4.69684 2.21414C4.8547 2.04671 5.11841 2.03895 5.28584 2.19682L11.1192 7.69682C11.2027 7.77554 11.25 7.88522 11.25 7.99998C11.25 8.11474 11.2027 8.22442 11.1192 8.30314L5.28584 13.8031C5.11841 13.961 4.8547 13.9533 4.69684 13.7858Z"
            fill="#6F6F6F"
          />
        </svg>
      </Link>
    </button>
  );
}
