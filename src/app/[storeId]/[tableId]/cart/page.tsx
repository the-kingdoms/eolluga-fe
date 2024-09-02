import { TopBar } from "@/shared";
import { Cart } from "@/widgets";

export default function Page({
  params,
}: {
  params: { storeId: string; tableId: string };
}) {
  return (
    <div className="relative">
      <TopBar title="장바구니" showCartLink={false} />
      <div className="h-svh space-y-[24px] pt-[48px]">
        <div className="mx-[16px] h-full">
          <Cart storeId={params.storeId} tableId={params.tableId} />
        </div>
      </div>
    </div>
  );
}
