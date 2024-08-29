import { getStore } from "@/entities";
import { TopBar } from "@/shared";
import { MenuList, StoreInfo, ViewCartButton } from "@/widgets";

export default async function Page({
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
