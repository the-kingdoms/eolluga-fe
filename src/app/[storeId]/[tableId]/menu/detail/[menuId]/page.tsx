import { MenuInfo } from "@/widgets";
import TopBar from "@/widgets/menu-info/ui/TopBar";

export default function Page({ params }: { params: { menuId: number } }) {
  return (
    <>
      <TopBar />
      <MenuInfo />
      {/* 직원 호출 버튼 */}
    </>
  );
}
