import BackButtonWithTitle from "@/shared/ui/BackButtonWithTitle";
import OrderStatus from "@/widgets/order-status/OrderStatus";

export default function Page() {
  return (
    <div className="relative h-full">
      <BackButtonWithTitle title="주문 완료" />
      <OrderStatus />
    </div>
  );
}
