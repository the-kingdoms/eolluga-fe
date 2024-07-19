import React from "react";

interface ButtonBarProps {
  isEnabled: boolean;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ isEnabled }) => {
  return (
    <div className="flex flex-col items-start gap-2 sticky bottom-0 pt-3 pb-5 px-4 border-t-[1px] border-t-solid border-t-[#C6C6C6] bg-white">
      <div
        className={`flex flex-col w-full h-[64px] justify-center items-center rounded-[8px] ${
          isEnabled ? "bg-[#131313]" : "bg-[#C6C6C6]"
        }`}
      >
        <div className="flex h-[64px] px-7 py-5 justify-center items-center gap-4">
          <div
            className={`${
              isEnabled ? "text-white" : "text-[#8D8D8D]"
            } text-right font-Pretendard text-base font-bold leading-5 tracking-[-0.5px]`}
          >
            18,000원
          </div>
          <div
            className={`w-[1px] h-[16px] ${
              isEnabled ? "bg-white" : "bg-[#8D8D8D]"
            }`}
          ></div>
          <div
            className={`${
              isEnabled ? "text-white" : "text-[#8D8D8D]"
            } text-right font-Pretendard text-base font-bold leading-5 tracking-[-0.5px]`}
          >
            {" "}
            장바구니에 담기
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
