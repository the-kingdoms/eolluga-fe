"use client";

import { useEffect, useState } from "react";

import {
  CartDataT,
  OrderCartItem,
  calculateCartTotalPrice,
  getCartData,
  removeAllItemFormCart,
} from "@/shared";
import OrderTotalAmount from "@/shared/ui/OrderTotalAmount";

import EmptyCart from "./EmptyCart";

export default function Cart() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<CartDataT>([]);

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
        <button
          type="button"
          onClick={() => {
            setData([]);
            removeAllItemFormCart();
          }}
          className="text-sm font-bold"
        >
          전체 삭제
        </button>
      </div>
      <ul className="w-full rounded-xl border border-[#8D8D8D]">
        {data.map((item, idx) => (
          <li className="relative px-[16px] py-[20px]" key={item.id}>
            <OrderCartItem setCartData={setData} data={item} />
            {idx !== data.length - 1 && (
              <div className="absolute bottom-0 left-0 w-full border" />
            )}
          </li>
        ))}
      </ul>
      <div className="mt-[24px]">
        <h2 className="mb-[12px] text-lg font-bold">주문 금액 확인</h2>
        <OrderTotalAmount />
      </div>
    </div>
  );
}
