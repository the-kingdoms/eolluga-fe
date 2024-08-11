import { OrderHistoryItemT, OrderHistoryT } from "@/shared";

function isOrderHistoryItemT(item: unknown): item is OrderHistoryItemT {
  if (typeof item !== "object" || item === null) return false;

  const orderItem = item as OrderHistoryItemT;

  return (
    typeof orderItem.orderHistoryId === "string" &&
    typeof orderItem.orderedAt === "string" &&
    typeof orderItem.totalPrice === "number" &&
    (orderItem.status === "pending" ||
      orderItem.status === "approved" ||
      orderItem.status === "disapproved") &&
    Array.isArray(orderItem.orderDetail) &&
    orderItem.orderDetail.every(
      detail =>
        typeof detail.name === "string" &&
        typeof detail.price === "number" &&
        typeof detail.count === "number" &&
        typeof detail.image === "string" &&
        Array.isArray(detail.options) &&
        detail.options.every(
          option =>
            typeof option.categoryName === "string" &&
            typeof option.name === "string" &&
            typeof option.price === "number",
        ),
    )
  );
}

function isOrderHistoryT(data: unknown): data is OrderHistoryT {
  return Array.isArray(data) && data.every(isOrderHistoryItemT);
}

export { isOrderHistoryT };
