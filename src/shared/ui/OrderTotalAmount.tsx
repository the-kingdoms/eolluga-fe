import { calculateCartTotalPrice } from "../utils/cart";

export default function OrderTotalAmount({
  orderTotal,
}: {
  orderTotal?: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border border-[#8D8D8D] p-[16px]">
      <p className="font-bold">총 주문금액</p>
      <p className="text-lg font-bold">
        {orderTotal?.toLocaleString() ||
          calculateCartTotalPrice().toLocaleString()}
        원
      </p>
    </div>
  );
}
