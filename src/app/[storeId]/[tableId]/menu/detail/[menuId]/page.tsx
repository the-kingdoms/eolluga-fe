import { getMenuOptions } from "@/entities";
import getMenu from "@/entities/menu/api/getMenu";
import TopBar from "@/shared/ui/TopBar";
import { MenuInfo } from "@/widgets";

export default async function Page({
  params,
}: {
  params: { menuId: string; storeId: string; tableId: number };
}) {
  const menu = await getMenu(params.storeId, params.menuId);
  const menuOptions = await getMenuOptions(params.storeId, params.menuId);

  const menuById = menu.filter(c => c.menuId === params.menuId)[0];

  return (
    <>
      <TopBar
        storeId={params.storeId}
        tableId={params.tableId}
        showBackButton
        showCartLink
        storeName="store"
      />
      <MenuInfo
        storeId={params.storeId}
        tableId={params.tableId}
        menu={menuById}
        menuOptions={menuOptions}
      />
    </>
  );
}
