"use client";

import { useEffect, useState } from "react";

import { calculateCartTotalPrice } from "@/shared";

export default function ViewCartButton() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTotal(calculateCartTotalPrice());
    }
  }, []);
  if (!total) return null;
  return (
    <div className="fixed bottom-0 w-full border-t border-[#c6c6c6] bg-white px-[16px] pb-[20px] pt-[12px]">
      <button
        type="button"
        className="flex h-[64px] w-full items-center justify-center space-x-[16px] rounded-lg bg-[#131313] text-[20px] text-white"
        aria-label={`합계 ${total.toLocaleString()}원 장바구니 보기`}
      >
        <span className="font-bold">{total.toLocaleString()}원</span>{" "}
        <span className="text-[#8D8D8D]">|</span>
        <span className="font-bold">장바구니 보기</span>
      </button>
    </div>
  );
}
