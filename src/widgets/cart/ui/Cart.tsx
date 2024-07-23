"use client";

import { useEffect, useState } from "react";

import { CartDataT, OrderCartItem, getCartData } from "@/shared";

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
      <div className="mb-[11px]">
        <p className="block text-lg font-bold">총 {data.length}개</p>
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
    </div>
  );
}
