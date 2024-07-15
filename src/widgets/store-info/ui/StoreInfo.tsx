"use client";

import useStoreInfo from "../model/useStoreInfo";
import Notice from "./Notice";
import StoreImage from "./StoreImage";
import TopBar from "./TopBar";
import ViewOriginInfoButton from "./ViewOriginInfoButton";

export default function StoreInfo({
  storeId,
  tableId,
}: {
  storeId: number;
  tableId: number;
}) {
  const { data, isError, isPending } = useStoreInfo(storeId);
  console.log(data);
  if (!data) return;
  return (
    <div>
      <StoreImage imageSrc={data?.image as string} />
      <TopBar />
      <div className="mx-[16px]">
        <div className="my-[24px] flex justify-between">
          <h1 className="text-[32px] font-bold">{data?.name}</h1>
          <ViewOriginInfoButton storeId={storeId} tableId={tableId} />
        </div>
        <Notice notice={data.notice} />
      </div>
      <div
        className={`bg-[#F4F4F4] h-[16px] w-full ${
          data.notice ? "my-[20px]" : "mb-[20px]"
        }`}
      />
    </div>
  );
}
