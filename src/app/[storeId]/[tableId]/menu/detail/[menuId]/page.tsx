import { MenuInfo } from "@/widgets";
import TopBar from "@/shared/ui/TopBar";

export default function Page({ params }: { params: { menuId: number } }) {
  return (
    <>
      <TopBar storeId={1} tableId={1} showBackButton />
      <MenuInfo />
      {/* 직원 호출 버튼 */}
    </>
  );
}
