"use client";

import { useRouter } from "next/navigation";

import { getCartData, removeAllItemsFromCart } from "@/shared";

import orderMenus from "../api/orderMenus";

export default function Order({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: number;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="text-large h-[48px] w-full rounded-lg bg-[#131313] text-white"
      onClick={() => {
        orderMenus(getCartData(), storeId, tableId);
        removeAllItemsFromCart();
        router.push(`/${storeId}/${tableId}/order/order-status`);
      }}
    >
      주문하기
    </button>
  );
}
