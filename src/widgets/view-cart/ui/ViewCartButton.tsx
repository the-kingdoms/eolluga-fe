"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { calculateCartTotalPrice } from "@/shared";

export default function ViewCartButton() {
  const { push } = useRouter();
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
        onClick={() => {
          push("./cart");
        }}
      >
        <span className="text-base font-bold">{total.toLocaleString()}원</span>{" "}
        <div className="h-[16px] w-[1px] bg-white" />
        <span className="text-base font-bold">장바구니 보기</span>
      </button>
    </div>
  );
}
