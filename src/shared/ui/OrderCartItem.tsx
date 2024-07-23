"use client";

import React, { useState } from "react";

import Image from "next/image";

import { CartDataT, CartItemT, OrderItemT } from "../types/order-cart-types";
import { removeItemFromCart, updateItemCount } from "../utils/cart";
import QuantityController from "./QuantityController";

export default function OrderCartItem({
  data,
  setCartData,
}: {
  data: CartItemT | OrderItemT;
  setCartData: React.Dispatch<React.SetStateAction<CartDataT>>;
}) {
  const [itemCount, setItemCount] = useState(data.count);

  const isOrderItem = (item: CartItemT | OrderItemT): item is OrderItemT => {
    return "orderedAt" in item;
  };

  const handleDecrease = () => {
    const newCount = itemCount - 1;
    if (newCount > 0) {
      setItemCount(newCount);
      updateItemCount(data.id, newCount);
      setCartData(prevData =>
        prevData.map(item =>
          item.id === data.id ? { ...item, count: newCount } : item,
        ),
      );
    } else {
      removeItemFromCart(data.id);
      setCartData(prevData => prevData.filter(item => item.id !== data.id));
    }
  };

  const handleIncrease = () => {
    const newCount = itemCount + 1;
    setItemCount(newCount);
    updateItemCount(data.id, newCount);
    setCartData(prevData =>
      prevData.map(item =>
        item.id === data.id ? { ...item, count: newCount } : item,
      ),
    );
  };

  if (itemCount <= 0) return null;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>
          {isOrderItem(data) && (
            <p className="mb-[16px] block text-sm text-[#6F6F6F]">
              {data.orderedAt}
            </p>
          )}
          <p className="mb-[8px] block font-bold">{data.name}</p>
          <ul className="mb-[8px] text-[#6F6F6F]">
            {data?.options?.map((option, index) => (
              <li key={index} className="space-y-[4px]">
                {option.category} - {option.name}{" "}
                {option.additionalPrice !== 0 &&
                  `(+
            ${option.additionalPrice.toLocaleString()}원)`}
              </li>
            ))}
          </ul>
          <p className="block">{data.price.toLocaleString()}원</p>
        </div>
        <div className="relative h-[64px] w-[64px] overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.name}
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
      <div className="mt-[16px] flex justify-end">
        <QuantityController
          count={itemCount}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
      </div>
    </div>
  );
}
