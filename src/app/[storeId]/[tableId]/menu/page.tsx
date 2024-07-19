import { TopBar } from "@/shared";
import { MenuList, StoreInfo, ViewCartButton } from "@/widgets";

export default function Page({
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  return (
    <div>
      <TopBar
        storeId={params.storeId as number}
        tableId={params.tableId as number}
      />
      <StoreInfo storeId={params.storeId} tableId={params.tableId} />
      <MenuList storeId={params.storeId} />
      <ViewCartButton />
    </div>
  );
}
