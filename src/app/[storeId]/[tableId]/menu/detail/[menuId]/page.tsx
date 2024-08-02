import TopBar from "@/shared/ui/TopBar";
import { MenuInfo } from "@/widgets";

export default function Page() {
  return (
    <>
      <TopBar
        storeId={1}
        tableId={1}
        showBackButton
        showCartLink
        storeName="store"
      />
      <MenuInfo />
    </>
  );
}
