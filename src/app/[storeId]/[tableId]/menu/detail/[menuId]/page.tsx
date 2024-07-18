import { MenuInfo } from "@/widgets";
import ButtonBar from "@/widgets/menu-info/ui/ButtonBar";

export default function Page({ params }: { params: { menuId: number } }) {
  return (
    <>
      {/* 상단바 */}
      <MenuInfo />
      {/* 직원 호출 버튼 */}
      {/* 하단 버튼 바 */}
      <ButtonBar />
    </>
  );
}
