import { redirect } from "next/navigation";

import { getStore } from "@/entities";
import { TopBar } from "@/shared";
import { MenuList, StoreInfo, ViewCartButton } from "@/widgets";

export default async function Page({
  params,
}: {
  params: { storeId: string; tableId: string };
}) {
  if (params.tableId === "random") {
    const randomTableId = Math.floor(Math.random() * 9000) + 1000; // randomTableId is between 1000 and 9999
    redirect(`/${params.storeId}/${randomTableId}/menu`);
  }

  const { storeInfo, categories, menus } = await getStore(params.storeId);
  const tableId = Number(params.tableId);

  return (
    <div>
      <TopBar
        showBackButton={false}
        storeId={params.storeId}
        tableId={tableId}
        storeName={storeInfo?.name || "매장 이름"}
      />
      <StoreInfo storeInfo={storeInfo || {}} />
      <MenuList
        tableId={tableId}
        storeId={params.storeId}
        categories={categories || []}
        menus={menus || []}
      />
      <ViewCartButton />
    </div>
  );
}
