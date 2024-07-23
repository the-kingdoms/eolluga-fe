import React from "react";

/* eslint-disable react/function-component-definition */

interface ButtonBarProps {
  isEnabled: boolean;
  totalPrice: number;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ isEnabled, totalPrice }) => {
  return (
    <div className="border-t-solid sticky bottom-0 flex flex-col items-start gap-2 border-t-[1px] border-t-[#C6C6C6] bg-white px-4 pb-5 pt-3">
      <div
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
      </div>
    </div>
  );
};

export default ButtonBar;
