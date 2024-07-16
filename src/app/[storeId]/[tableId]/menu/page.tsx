import { StoreInfo } from "@/widgets";
import MenuList from "@/widgets/menu-list/ui/MenuList";

export default function Page({
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  return (
    <div>
      <StoreInfo storeId={params.storeId} tableId={params.tableId} />
      <MenuList storeId={params.storeId} />
    </div>
  );
}
