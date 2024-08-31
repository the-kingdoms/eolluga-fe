"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function RetryOrderDialog({
  isError,

  placeOrder,
}: {
  isError: boolean;
  placeOrder: () => void;
}) {
  useEffect(() => {
    if (isError) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isError]);

  if (!isError) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[330px] rounded-xl border bg-white px-[20px] py-[28px] text-center">
        <h2 className="mb-[16px] text-center text-xl font-bold">
          주문 요청을 다시 해주세요
        </h2>
        <p className="mb-[24px] text-sm">
          시스템 오류로 주문 요청에 문제가 생겼어요.
        </p>
        <button
          type="button"
          className="w-full rounded-md bg-[#131313] py-[12px] text-sm text-white"
          onClick={placeOrder}
        >
          다시 시도하기
        </button>
      </div>
    </div>,
    document.body,
  );
}
