import BackButtonWithTitle from "@/shared/ui/BackButtonWithTitle";
import OrderStatus from "@/widgets/order-status/ui/OrderStatus";

export default function Page({
  params,
}: {
  params: { storeId: string; tableId: string };
}) {
  return (
    <div className="relative h-full">
      <BackButtonWithTitle title="주문 완료" />
      <OrderStatus storeId={params.storeId} tableId={params.tableId} />
    </div>
  );
}
