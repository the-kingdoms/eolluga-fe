"use client";

import { useEffect, useState } from "react";
import calculateCartTotalPrice from "../utils/calculateCartTotalPrice";

export default function ViewCartButton() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTotal(calculateCartTotalPrice());
    }
  }, []);
  if (!total) return null;
  return (
    <div className="fixed bottom-0 w-full px-[16px] pt-[12px] pb-[20px] bg-white border-t border-[#c6c6c6]">
      <button
        type="button"
        className="bg-[#131313] text-white text-[20px] w-full h-[64px] rounded-lg space-x-[16px] flex items-center justify-center"
        aria-label={`합계 ${total.toLocaleString()}원 장바구니 보기`}>
        <span className="font-bold ">{total.toLocaleString()}원</span>{" "}
        <span className="text-[#8D8D8D]">|</span>
        <span className="font-bold ">장바구니 보기</span>
      </button>
    </div>
  );
}
