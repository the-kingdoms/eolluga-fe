import Image from "next/image";

import { OrderHistoryItemT } from "@/shared";

export default function OrderSummary({
  data,
  toggleShowMore,
  showMore,
}: {
  data: OrderHistoryItemT;
  toggleShowMore: (orderId: string) => void;
  showMore: {
    [key: string]: boolean;
  };
}) {
  return (
    <div>
      <p className="mb-[16px] block text-sm text-[#6F6F6F]">{data.orderedAt}</p>
      <div className="flex justify-between">
        <div>
          <div className="space-y-[4px]">
            <p className="block font-bold">
              {data.orderDetail.length > 1
                ? `${data.orderDetail[0].name} 외 ${data.orderDetail.length - 1}개`
                : data.orderDetail[0].name}
            </p>

            <p className="block text-sm font-bold">
              {data.totalPrice.toLocaleString()}원
            </p>
          </div>
        </div>
        <div className="relative h-[64px] w-[64px] overflow-hidden rounded-lg">
          <Image
            src={data.orderDetail[0].image}
            alt={data.orderDetail[0].name}
            fill
            style={{ objectFit: "fill" }}
            priority
          />
        </div>
      </div>
      <div className="mb-[20px] mt-[16px] px-[16px]">
        <button
          type="button"
          className="font-border relative flex h-[40px] w-full items-center justify-center space-x-[4px] rounded-lg border border-[#A8A8A8] text-sm font-bold text-[#6F6F6F]"
          aria-label={showMore[data.orderHistoryId] ? "접기" : "자세히 보기"}
          onClick={() => {
            toggleShowMore(data.orderHistoryId);
          }}
        >
          <span>{showMore[data.orderHistoryId] ? "접기" : "자세히 보기"}</span>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform duration-300 ${showMore[data.orderHistoryId] ? "rotate-180" : "rotate-0"}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.63083 4.78025C2.79826 4.62239 3.06197 4.63015 3.21983 4.79758L8.41667 10.3094L13.6135 4.79758C13.7714 4.63015 14.0351 4.62239 14.2025 4.78026C14.3699 4.93812 14.3777 5.20182 14.2198 5.36926L8.71983 11.2026C8.6411 11.2861 8.53143 11.3334 8.41667 11.3334C8.30191 11.3334 8.19223 11.2861 8.1135 11.2026L2.61351 5.36925C2.45564 5.20182 2.4634 4.93812 2.63083 4.78025Z"
              fill="#6F6F6F"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
