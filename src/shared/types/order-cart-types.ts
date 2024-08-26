interface CartMenuOptionT {
  categoryName: string;
  name: string;
  price: number;
}

interface CartItemT {
  name: string;
  price: number;
  count: number;
  options: CartMenuOptionT[];
}

type CartItemsT = CartItemT[];

interface OrderHistoryItemT {
  orderHistoryId: string;
  paymentHistoryId: string;
  totalPrice: number;
  status: "PENDING" | "APPROVED" | "DISAPPROVED";
  orderDetail: CartItemsT;
}

type OrderHistoryT = OrderHistoryItemT[];

export type {
  CartMenuOptionT,
  CartItemT,
  CartItemsT,
  OrderHistoryItemT,
  OrderHistoryT,
};
