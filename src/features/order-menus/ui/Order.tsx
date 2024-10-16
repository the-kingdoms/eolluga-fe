"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { getCartData, removeAllItemsFromCart } from "@/shared";
import NetworkErrorToast from "@/shared/ui/NetworkErrorToast";

import orderMenus from "../api/orderMenus";
import orderMenusNotification from "../api/orderMenusNotification";
import RetryOrderDialog from "./RetryOrderDialog";

export default function Order({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: number;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);
  const placeOrder = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      await orderMenus(getCartData(), storeId, tableId);
      await orderMenusNotification(storeId, tableId);
      removeAllItemsFromCart();
      router.push(`/${storeId}/${tableId}/order/order-status`);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "network-error") setIsNetworkError(true);
        else setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
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
      <RetryOrderDialog
        isError={isError}
        placeOrder={placeOrder}
        onClose={() => setIsError(false)}
      />
      <NetworkErrorToast
        isNetworkError={isNetworkError}
        onClose={() => setIsNetworkError(false)}
        onRetry={placeOrder}
      />
    </>
  );
}
