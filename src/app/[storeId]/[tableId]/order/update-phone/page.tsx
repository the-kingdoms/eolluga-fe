"use client";

import { ChangeEvent, useState } from "react";

import { useRouter } from "next/navigation";

import getOrder from "@/entities/order/api/getOrder";
import { sendSMS } from "@/features";
import { OrderHistoryT, TopBar } from "@/shared";

export default function Page({
  params,
}: {
  params: { storeId: string; tableId: number };
}) {
  const router = useRouter();

  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");

  const phoneNumberRegex = /^010\d{8}$/;
  const onChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const onClickSkipButton = async () => {
    router.push(`/${params.storeId}/${params.tableId}/order/order-status`);
  };

  const onClickOrderButton = async () => {
    const noDashPhoneNumber = phone.replace(/-/g, "");
    setPhone(noDashPhoneNumber);

    if (!phoneNumberRegex.test(phone)) setError("전화번호를 확인해주세요");
    else {
      setError("");
      let orderList: OrderHistoryT = [];
      try {
        orderList = await getOrder(params.storeId, params.tableId);
        if (orderList.length === 0) throw new Error();
      } catch (e) {
        setError("존재하지 않는 주문입니다.");
        return;
      }
      try {
        const { paymentHistoryId } = orderList[0];
        await sendSMS(phone, params.storeId, paymentHistoryId);
      } catch (e) {
        setError("문자 전송에 실패했습니다. 다시 시도해주세요.");
        return;
      }
      router.push(`/${params.storeId}/${params.tableId}/order/order-status`);
    }
  };

  return (
    <div className="relative">
      <TopBar
        showCartLink={false}
        showOrderLink={false}
        title="조리 완료 알림 받기"
      />
      <div className="relative h-full justify-between space-y-[24px] px-4 pt-[70px]">
        <div>
          <div className="mb-[56px] mt-8 font-bold">
            <div className="text-black">조리 완료 알림을 받을</div>
            <div className="text-black">휴대폰 번호를 입력해주세요</div>
          </div>
          <div>
            <input
              className={`border-1 w-full rounded-lg border ${error ? "border-red-500" : "border-[#C6C6C6]"} px-4 py-[15px] outline-none placeholder:text-[#A8A8A8]`}
              placeholder="“-” 빼고 입력해주세요."
              value={phone}
              onChange={onChangePhoneNumber}
            />
            <div className="mt-1 pl-4 text-sm text-red-500">{error}</div>
          </div>
        </div>
        <div className="fixed bottom-[16px] left-0 mb-4 w-full bg-white px-4">
          <button
            type="button"
            className="mb-4 w-full cursor-pointer text-center text-sm font-bold text-[#A8A8A8] underline underline-offset-4"
            onClick={onClickSkipButton}
          >
            문자 알림은 괜찮아요.
          </button>
          <button
            type="button"
            className="text-large w-full rounded-lg bg-[#131313] py-[22px] text-white"
            onClick={onClickOrderButton}
          >
            주문 알림 받기
          </button>
        </div>
      </div>
    </div>
  );
}
