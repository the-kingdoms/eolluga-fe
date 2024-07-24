import getOrder from "@/entities/order/api/getOrder";
import { BackButtonWithTitle } from "@/shared";
import { OrderList } from "@/widgets";

export default async function Page({
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  const data = await getOrder(params.storeId, params.tableId);
  return (
    <div className="relative h-svh space-y-[24px]">
      <BackButtonWithTitle title="주문내역" />
      <div className="mx-[16px] h-full">
        <OrderList data={data} />
      </div>
    </div>
  );
}
