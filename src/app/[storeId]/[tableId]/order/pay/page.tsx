"use client";

import { ChangeEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { sendSMS } from "@/features";
import orderMenus from "@/features/order-menus/api/orderMenus";
import orderMenusNotification from "@/features/order-menus/api/orderMenusNotification";
import {
  TopBar,
  calculateCartTotalPrice,
  getCartData,
  removeAllItemsFromCart,
} from "@/shared";

export default function Page({
  params,
}: {
  params: { storeId: string; tableId: number };
}) {
  const router = useRouter();

  const [phone, setPhone] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNetworkError, setIsNetworkError] = useState<boolean>(false);

  const phoneNumberRegex = /^010\d{8}$/;
  const onChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const onClickOrderButton = async () => {
    const noDashPhoneNumber = phone.replace(/-/g, "");
    setPhone(noDashPhoneNumber);

    if (!phoneNumberRegex.test(phone)) setIsError(true);
    else {
      setIsError(false);
      placeOrder();
    }
  };

  const placeOrder = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const historyId = await orderMenus(
        getCartData(),
        params.storeId,
        params.tableId,
      );
      await orderMenusNotification(params.storeId, params.tableId);
      if (phone.length > 0) await sendSMS(phone, params.storeId, historyId);
      removeAllItemsFromCart();
      router.push(`/${params.storeId}/${params.tableId}/order/order-status`);
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
    <div className="relative">
      <TopBar showCartLink={false} showOrderLink={false} title="주문하기" />
      <div className="relative h-full justify-between space-y-[24px] px-4 pt-[70px]">
        <div>
          <div className="mb-[56px] mt-8">
            <div className="mb-6 text-black">결제수단</div>
            <div className="text-black">사장님께 직접 결제</div>
          </div>
          <div>
            <div className="mb-3 text-black">
              조리 완료 알림을 받을 전화번호를 입력해주세요.
            </div>
            <input
              className={`border-1 w-full rounded-lg border ${isError ? "border-red-500" : "border-[#C6C6C6]"} px-4 py-[15px] outline-none placeholder:text-[#A8A8A8]`}
              placeholder="01012345678"
              value={phone}
              onChange={onChangePhoneNumber}
            />
            <div className="pl-4 text-sm text-red-500">
              {isError ? "전화번호를 확인해주세요" : ""}
            </div>
          </div>
        </div>
        <div className="fixed bottom-[16px] left-0 mb-4 w-full bg-white px-4">
          <button
            type="button"
            className="text-large w-full rounded-lg bg-[#131313] py-[22px] text-white"
            onClick={onClickOrderButton}
          >
            {isLoading ? "주문 중..." : "주문하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
