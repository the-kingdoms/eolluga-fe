import { getStore } from "@/entities";
import { TopBar } from "@/shared";
import { MenuList, StoreInfo, ViewCartButton } from "@/widgets";

export default async function Page({
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  const { storeInfo, categories, menu } = await getStore(params.storeId);
  return (
    <div>
      <TopBar
        showBackButton={false}
        storeId={params.storeId as number}
        tableId={params.tableId as number}
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
        menu={menu || []}
      />
      <ViewCartButton />
    </div>
  );
}
