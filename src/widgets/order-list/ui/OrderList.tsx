"use client";

import { useRouter } from "next/navigation";

import { CallStaff } from "@/features";
import { OrderHistoryT } from "@/shared";
import OrderTotalAmount from "@/shared/ui/OrderTotalAmount";

import OrderItems from "./OrderItems";

export default function OrderList({ data }: { data: OrderHistoryT }) {
  const router = useRouter();
  console.log(data);

  return (
    <div>
      <div className="mb-[11px] flex justify-between">
        <p className="block text-lg font-bold">총 {data.length}개</p>
      </div>
      <div className="space-y-[24px]">
        {data.map(order => (
          <OrderItems order={order} key={order.orderHistoryId} />
        ))}
      </div>

      <div className="mt-[24px] pb-[148px]">
        <h2 className="mb-[12px] text-lg font-bold">주문 금액 확인</h2>
        <OrderTotalAmount
          orderTotal={data.reduce((acc, cur) => cur.totalPrice + acc, 0)}
        />
      </div>
      <div className="fixed bottom-[96px] right-[16px]">
        <CallStaff />
      </div>
      <div className="fixed bottom-0 left-0 h-[80px] w-full border-t border-[#C6C6C6] bg-white px-[16px] pt-[12px]">
        <button
          type="button"
          className="text-large h-[48px] w-full rounded-lg bg-[#131313] text-white"
          onClick={() => router.push("./menu")}
        >
          추가 주문하기
        </button>
      </div>
    </div>
  );
}
