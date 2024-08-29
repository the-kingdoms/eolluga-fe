import getOrder from "@/entities/order/api/getOrder";
import { TopBar } from "@/shared";
import { OrderList } from "@/widgets";

export default async function Page({
  params,
}: {
  params: { storeId: string; tableId: number };
}) {
  const data = await getOrder(params.storeId, params.tableId);
  return (
    <>
      <TopBar title="주문내역" showOrderLink={false} />
      <div className="relative mt-[70px] h-svh space-y-[24px]">
        <div className="mx-[16px] h-full">
          {!data ? null : <OrderList data={data} />}
        </div>
      </div>
    </>
  );
}
