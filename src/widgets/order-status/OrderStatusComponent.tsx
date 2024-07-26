"use client";

import React from "react";

import Image from "next/image";

import { OrderStatusProps } from "@/shared/types/order-status";

export default function OrderStatusComponent({
  title,
  description,
  imagePath,
  imageWidth,
  imageHeight,
  buttonText,
}: OrderStatusProps) {
  return (
    <>
      <div className="mt-[48px] flex justify-center text-center text-[28px] font-bold leading-[36px] tracking-[-0.25px]">
        {title}
      </div>
      <div className="font-regular mt-[12px] flex justify-center text-center text-[14px] leading-[20px] tracking-[-0.5px]">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="mt-[91px] flex justify-center">
        <Image
          src={imagePath}
          width={imageWidth}
          height={imageHeight}
          alt="status-image"
        />
      </div>
      {buttonText && (
        <div className="absolute bottom-5 w-full">
          <div className="mx-[16px] flex h-[64px] flex-col items-center justify-center rounded-[8px] bg-[#131313]">
            <div className="flex h-[64px] items-center justify-center gap-4 px-[28px] py-[20px]">
              <div className="text-[16px] font-bold text-white">
                {buttonText}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
