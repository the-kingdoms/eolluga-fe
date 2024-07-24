"use client";

import { useState } from "react";

import { CallStaff } from "@/features";
import { OrderCartItem, OrderDataT } from "@/shared";
import OrderTotalAmount from "@/shared/ui/OrderTotalAmount";

export default function OrderList({ data }: { data: OrderDataT }) {
  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});

  const toggleShowMore = (orderId: string) => {
    setShowMore(prevState => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };

  return (
    <div>
      <div className="mb-[11px] flex justify-between">
        <p className="block text-lg font-bold">총 {data.length}개</p>
      </div>
      <div className="space-y-[8px]">
        {data.map(order => (
          <ul
            className="w-full overflow-hidden rounded-xl border border-[#8D8D8D] transition-all duration-300"
            key={order.orderId}
          >
            {!showMore[order.orderId] ? (
              <li className="relative px-[16px] py-[20px]" key={order.orderId}>
                <OrderCartItem
                  data={order.items[0]}
                  order={order}
                  showSummary={!showMore[order.orderId]}
                />
                <button
                  type="button"
                  className="font-border mt-[16px] flex h-[40px] w-full items-center justify-center space-x-[4px] rounded-lg border border-[#A8A8A8] text-sm font-bold text-[#6F6F6F]"
                  aria-label="자세히 보기"
                  onClick={() => toggleShowMore(order.orderId)}
                >
                  <span>자세히 보기</span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform duration-300 ${showMore[order.orderId] ? "rotate-180" : "rotate-0"}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.63083 4.78025C2.79826 4.62239 3.06197 4.63015 3.21983 4.79758L8.41667 10.3094L13.6135 4.79758C13.7714 4.63015 14.0351 4.62239 14.2025 4.78026C14.3699 4.93812 14.3777 5.20182 14.2198 5.36926L8.71983 11.2026C8.6411 11.2861 8.53143 11.3334 8.41667 11.3334C8.30191 11.3334 8.19223 11.2861 8.1135 11.2026L2.61351 5.36925C2.45564 5.20182 2.4634 4.93812 2.63083 4.78025Z"
                      fill="#6F6F6F"
                    />
                  </svg>
                </button>
              </li>
            ) : (
              <>
                {order.items.map((item, idx) => (
                  <li className="relative px-[16px] py-[20px]" key={item.id}>
                    <OrderCartItem data={item} order={order} />
                  </li>
                ))}
                <div className="px-[16px]">
                  <button
                    type="button"
                    className="font-border my-[16px] flex h-[40px] w-full items-center justify-center space-x-[4px] rounded-lg border border-[#A8A8A8] px-[16px] text-sm font-bold text-[#6F6F6F]"
                    aria-label="간단히 보기"
                    onClick={() => toggleShowMore(order.orderId)}
                  >
                    <span>간단히 보기</span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform transition-transform duration-300 ${showMore[order.orderId] ? "rotate-180" : "rotate-0"}`}
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
              </>
            )}
          </ul>
        ))}
      </div>

      <div className="mt-[24px] pb-[148px]">
        <h2 className="mb-[12px] text-lg font-bold">주문 금액 확인</h2>
        <OrderTotalAmount
          orderTotal={data.reduce((acc, cur) => cur.orderTotal + acc, 0)}
        />
      </div>
      <div className="fixed bottom-[96px] right-[16px]">
        <CallStaff />
      </div>
      <div className="fixed bottom-0 left-0 h-[80px] w-full border-t border-[#C6C6C6] bg-white px-[16px] pt-[12px]">
        추가주문
      </div>
    </div>
  );
}
