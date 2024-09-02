"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function RetryOrderDialog({
  isError,
  placeOrder,
  onClose,
}: {
  isError: boolean;
  placeOrder: () => void;
  onClose: () => void;
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
        <div className="flex space-x-2">
          <button
            type="button"
            className="w-2/5 rounded-md bg-[#D3D3D3] py-[12px] text-sm text-black"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            type="button"
            className="w-3/5 rounded-md bg-[#131313] py-[12px] text-sm text-white"
            onClick={placeOrder}
          >
            다시 시도하기
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
