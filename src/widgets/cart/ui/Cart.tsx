"use client";

import { useEffect, useState } from "react";

import { CallStaff, DeleteAllCartItems, Order } from "@/features";
import {
  CartItemsT,
  OrderCartItem,
  generateUniqueCartItemKey,
  getCartData,
} from "@/shared";
import OrderTotalAmount from "@/shared/ui/OrderTotalAmount";

import EmptyCart from "./EmptyCart";

export default function Cart({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: number;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<CartItemsT>([]);

  useEffect(() => {
    const cartData = getCartData();
    setData(cartData);
    setIsLoading(false);
  }, []);

  if (isLoading) return null;
  if (!data.length) return <EmptyCart />;

  return (
    <div>
      <div className="mb-[11px] flex justify-between">
        <p className="block text-lg font-bold">총 {data.length}개</p>
        <DeleteAllCartItems onClearCart={() => setData([])} />
      </div>
      <ul className="w-full rounded-xl border border-[#8D8D8D]">
        {data.map((item, idx) => (
          <li
            className="relative px-[16px] py-[20px]"
            key={generateUniqueCartItemKey(item)}
          >
            <OrderCartItem setCartData={setData} data={item} />
            {idx !== data.length - 1 && (
              <div className="absolute bottom-0 left-0 w-full border" />
            )}
          </li>
        ))}
      </ul>
      <div className="mt-[24px] pb-[148px]">
        <h2 className="mb-[12px] text-lg font-bold">주문 금액 확인</h2>
        <OrderTotalAmount />
      </div>
      <div className="fixed bottom-[96px] right-[16px]">
        <CallStaff storeId={storeId} tableId={tableId} />
      </div>
      <div className="fixed bottom-0 left-0 h-[97px] w-full border-t border-[#C6C6C6] bg-white px-4 pb-5 pt-3">
        <Order storeId={storeId} tableId={tableId} />
      </div>
    </div>
  );
}
