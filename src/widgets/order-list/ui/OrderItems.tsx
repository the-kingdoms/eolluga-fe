import { useState } from "react";

import {
  OrderCartItem,
  OrderHistoryItemT,
  generateUniqueCartItemKey,
} from "@/shared";

import OrderSummary from "./OrderSummary";

export default function OrderItems({ order }: { order: OrderHistoryItemT }) {
  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});

  const toggleShowMore = (orderId: string) => {
    setShowMore(prevState => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };
  return (
    <ul
      className="w-full overflow-hidden rounded-xl border border-[#8D8D8D] px-[16px]"
      key={order.orderHistoryId}
    >
      <li className="relative pt-[20px]" key={order.orderHistoryId}>
        <OrderSummary
          data={order}
          toggleShowMore={toggleShowMore}
          showMore={showMore}
        />
      </li>

      <div
        className={`origin-top transform transition-all duration-300 ease-in-out ${showMore[order.orderHistoryId] ? "max-h-[1000px] scale-y-100 opacity-100" : "max-h-0 scale-y-0 opacity-0"}`}
      >
        {order.orderDetail.map(item => (
          <li
            className="relative border-t py-[20px]"
            key={generateUniqueCartItemKey(item)}
          >
            <OrderCartItem data={item} orderedAt={order.orderedAt} />
          </li>
        ))}
      </div>
    </ul>
  );
}
