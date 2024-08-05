"use client";

/* eslint-disable consistent-return */
import { StoreInfoT } from "@/entities";

import Notice from "./Notice";
import StoreImage from "./StoreImage";
import ViewOriginInfoButton from "./ViewOriginInfoButton";

type StoreInfoProps = {
  storeInfo: StoreInfoT | Record<string, never>;
  storeId: number;
  tableId: number;
};

export default function StoreInfo({
  storeInfo = {},
  storeId,
  tableId,
}: StoreInfoProps) {
  const {
    image = "",
    name = "",
    externalNotice = "",
  } = storeInfo as StoreInfoT;

  return (
    <div>
      <StoreImage imageSrc={image} />
      <div className="mx-[16px]">
        <div className="my-[24px] flex justify-between">
          <h1 className="text-[32px] font-bold">{name || "매장 이름"}</h1>
          <ViewOriginInfoButton storeId={storeId} tableId={tableId} />
        </div>
        <Notice notice={externalNotice || ""} />
      </div>
      <div
        className={`h-[16px] w-full bg-[#F4F4F4] ${
          externalNotice ? "my-[20px]" : "mb-[20px]"
        }`}
      />
    </div>
  );
}
