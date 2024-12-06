"use client";

import { useRouter } from "next/navigation";

import { getStore } from "@/entities";
import { TopBar } from "@/shared";
import { MenuList, StoreInfo, ViewCartButton } from "@/widgets";

async function StorePage({
  params,
}: {
  params: { storeId: string; tableId: number };
}) {
  const { storeInfo, categories, menus } = await getStore(params.storeId);
  return (
    <div>
      <TopBar
        showBackButton={false}
        storeId={params.storeId}
        tableId={params.tableId}
        storeName={storeInfo?.name || "매장 이름"}
      />
      <StoreInfo
        storeInfo={storeInfo || {}}
        storeId={params.storeId}
        tableId={params.tableId}
      />
      <MenuList
        tableId={params.tableId}
        storeId={params.storeId}
        categories={categories || []}
        menus={menus || []}
      />
      <ViewCartButton />
    </div>
  );
}

export default function Page({
  params,
}: {
  params: { storeId: string; tableId: number };
}) {
  const router = useRouter();
  if ((params.tableId as unknown as string) === "random") {
    const randomTableId = (Math.floor(Math.random() * 10000) + 1) % 10000;
    router.push(`/${params.storeId}/${randomTableId}/menu`);
    return <>Redirecting...</>;
  }
  return <StorePage params={params} />;
}
