import getOrder from "@/entities/order/api/getOrder";
import { TopBar } from "@/shared";
import { OrderList } from "@/widgets";

export default async function Page({
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  const data = await getOrder(params.storeId, params.tableId);
  return (
    <div className="relative">
      <TopBar title="주문내역" showOrderLink={false} />
      <div className="mt-[70px] h-svh space-y-[24px]">
        <div className="mx-[16px] h-full">
          {!data ? null : <OrderList data={data} />}
        </div>
      </div>
    </div>
  );
}
