"use client";

import { StoreInfoT } from "@/entities";
import Notice from "./Notice";
import StoreImage from "./StoreImage";
import ViewOriginInfoButton from "./ViewOriginInfoButton";

export default function StoreInfo({
  storeInfo,
  storeId,
  tableId,
}: {
  storeInfo: StoreInfoT;
  storeId: number;
  tableId: number;
}) {
  if (!storeInfo) return;
  return (
    <div>
      <StoreImage imageSrc={storeInfo?.image as string} />
      <div className="mx-[16px]">
        <div className="my-[24px] flex justify-between">
          <h1 className="text-[32px] font-bold">{storeInfo?.name}</h1>
          <ViewOriginInfoButton storeId={storeId} tableId={tableId} />
        </div>
        <Notice notice={storeInfo.notice} />
      </div>
      <div
        className={`bg-[#F4F4F4] h-[16px] w-full ${
          storeInfo.notice ? "mt-[20px]" : "mb-[20px]"
        }`}
      />
    </div>
  );
}
