"use client";

import React, { useState } from "react";

import Image from "next/image";

type Status = "pending" | "approved" | "rejected";

export default function OrderStatus() {
  const [orderStatus, setOrderStatus] = useState<Status>("pending");

  const renderContent = () => {
    switch (orderStatus) {
      case "pending":
        return (
          <>
            <div className="mt-[48px] flex justify-center text-center text-[28px] font-bold leading-[36px] tracking-[-0.25px]">
              주문이 전달되었어요
            </div>
            <div className="font-regular mt-[12px] flex justify-center text-center text-[14px] leading-[20px] tracking-[-0.5px]">
              사장님이 곧 주문을 확인하실거에요 <br />
              잠시만 기다려주세요
            </div>
            <div className="mt-[91px] flex justify-center">
              <Image
                src="/image/wall-clock.png"
                width={256}
                height={258}
                alt="wall-clock"
              />
            </div>
          </>
        );
      case "approved":
        return (
          <>
            <div className="mt-[48px] flex justify-center text-center text-[28px] font-bold leading-[36px] tracking-[-0.25px]">
              주문이 완료되었어요
            </div>
            <div className="font-regular mt-[12px] flex justify-center text-center text-[14px] leading-[20px] tracking-[-0.5px]">
              메뉴가 준비되면 가져다 드리겠습니다 <br />
              잠시만 기다려주세요
            </div>
            <div className="mt-[68px] flex justify-center">
              <Image
                src="/image/receipt.png"
                width={328}
                height={286}
                alt="receipt"
              />
            </div>
            <div className="absolute bottom-5 w-full">
              <div className="mx-[16px] flex h-[64px] flex-col items-center justify-center rounded-[8px] bg-[#131313]">
                <div className="flex h-[64px] items-center justify-center gap-4 px-[28px] py-[20px]">
                  <div className="text-[16px] font-bold text-white">
                    주문 내역 보기
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "rejected":
        return (
          <>
            <div className="mt-[48px] flex justify-center text-center text-[28px] font-bold leading-[36px] tracking-[-0.25px]">
              주문이 거절되었어요
            </div>
            <div className="font-regular mt-[12px] flex justify-center text-center text-[14px] leading-[20px] tracking-[-0.5px]">
              가게 사정으로 주문이 거절되었습니다 <br />
              다른 메뉴를 주문해주세요
            </div>
            <div className="mt-[92px] flex justify-center">
              <Image
                src="/image/sad-emoji.png"
                width={254}
                height={254}
                alt="sad-emoji"
              />
            </div>
            <div className="absolute bottom-5 w-full">
              <div className="mx-[16px] flex h-[64px] flex-col items-center justify-center rounded-[8px] bg-[#131313]">
                <div className="flex h-[64px] items-center justify-center gap-4 px-[28px] py-[20px]">
                  <div className="text-[16px] font-bold text-white">
                    다른 메뉴 보기
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* 추후 삭제 */}
      <nav>
        <button type="button" onClick={() => setOrderStatus("pending")}>
          주문할 경우
        </button>
        <button type="button" onClick={() => setOrderStatus("approved")}>
          주문 승인할 경우
        </button>
        <button type="button" onClick={() => setOrderStatus("rejected")}>
          주문 거절할 경우
        </button>
      </nav>
      {renderContent()}
    </>
  );
}
