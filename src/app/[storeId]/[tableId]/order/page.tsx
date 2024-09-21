import { TopBar } from "@/shared";
import { OrderList } from "@/widgets";

export default function Page({
  params,
}: {
  params: { storeId: string; tableId: number };
}) {
  return (
    <div className="relative">
      <TopBar
        title="주문내역"
        showOrderLink={false}
        storeId={params.storeId}
        tableId={params.tableId}
      />
      <div className="relative h-svh space-y-[24px] pt-[70px]">
        <div className="mx-[16px] h-full">
          <OrderList storeId={params.storeId} tableId={params.tableId} />
        </div>
      </div>
    </div>
  );
}
