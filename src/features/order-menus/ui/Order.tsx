"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { getCartData, removeAllItemsFromCart } from "@/shared";
import NetworkErrorToast from "@/shared/ui/NetworkErrorToast";

import orderMenus from "../api/orderMenus";
import RetryOrderDialog from "./RetryOrderDialog";

export default function Order({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const placeOrder = async () => {
    setIsError(false);
    setIsLoading(true);
    const result = await orderMenus(getCartData(), storeId, tableId);

    if (result === "success") {
      removeAllItemsFromCart();
      router.push(`/${storeId}/${tableId}/order/order-status`);
    } else if (result === "network-error") {
      setIsNetworkError(true);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      <button
        type="button"
        className="text-large h-[48px] w-full rounded-lg bg-[#131313] text-white"
        onClick={placeOrder}
        disabled={isLoading}
      >
        {isLoading ? "주문 중..." : "주문하기"}
      </button>
      <RetryOrderDialog isError={isError} placeOrder={placeOrder} />
      <NetworkErrorToast
        isNetworkError={isNetworkError}
        onClose={() => setIsNetworkError(false)}
        onRetry={placeOrder}
      />
    </>
  );
}
