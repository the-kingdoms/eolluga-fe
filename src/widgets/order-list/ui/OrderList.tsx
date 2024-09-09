"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import getOrder from "@/entities/order/api/getOrder";
import { CallStaff } from "@/features";
import { OrderHistoryT } from "@/shared";
import OrderTotalAmount from "@/shared/ui/OrderTotalAmount";

import OrderItems from "./OrderItems";

export default function OrderList({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: number;
}) {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderHistoryT>([]);
  useEffect(() => {
    getOrder(storeId, tableId).then((data: OrderHistoryT) => {
      const newOrderData = data
        .filter(order => order.status !== "DISAPPROVED")
        .sort((a, b) => {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        });
      setOrderData(newOrderData);
    });
  }, [storeId, tableId]);

  return (
    <div>
      <div className="mb-[11px] flex justify-between">
        <p className="block text-lg font-bold">총 {orderData.length}개</p>
      </div>
      <div className="space-y-[24px]">
        {orderData.map(order => (
          <OrderItems order={order} key={order.orderHistoryId} />
        ))}
      </div>

      <div className="mt-[24px] pb-[148px]">
        <h2 className="mb-[12px] text-lg font-bold">주문 금액 확인</h2>
        <OrderTotalAmount
          orderTotal={orderData.reduce((acc, cur) => cur.totalPrice + acc, 0)}
        />
      </div>
      <div className="fixed bottom-[96px] right-[16px]">
        <CallStaff storeId={storeId} tableId={tableId} />
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
