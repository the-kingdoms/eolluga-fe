import React from "react";

import { useRouter } from "next/navigation";

interface ButtonBarProps {
  isEnabled: boolean;
  totalPrice: number;
  onClick: () => void;
}

export default function ButtonBar({
  isEnabled,
  totalPrice,
  onClick,
}: ButtonBarProps) {
  return (
    <div className="border-t-solid fixed bottom-0 flex w-full flex-col items-start gap-2 border-t-[1px] border-t-[#C6C6C6] bg-white px-4 pb-5 pt-3">
      <button
        type="button"
        onClick={
          isEnabled
            ? () => {
                onClick();
              }
            : undefined
        }
        className={`flex h-[64px] w-full flex-col items-center justify-center rounded-[8px] ${
          isEnabled ? "bg-[#131313]" : "bg-[#C6C6C6]"
        }`}
      >
        <div className="flex h-[64px] items-center justify-center gap-4 px-7 py-5">
          <div
            className={`${
              isEnabled ? "text-white" : "text-[#8D8D8D]"
            } font-Pretendard text-right text-base font-bold leading-5 tracking-[-0.5px]`}
          >
            {totalPrice.toLocaleString()}원
          </div>
          <div
            className={`h-[16px] w-[1px] ${
              isEnabled ? "bg-white" : "bg-[#8D8D8D]"
            }`}
          />
          <div
            className={`${
              isEnabled ? "text-white" : "text-[#8D8D8D]"
            } font-Pretendard text-right text-base font-bold leading-5 tracking-[-0.5px]`}
          >
            장바구니에 담기
          </div>
        </div>
      </button>
    </div>
  );
}
