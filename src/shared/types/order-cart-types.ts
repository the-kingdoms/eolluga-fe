interface CartMenuOptionT {
  categoryName: string;
  name: string;
  price: number;
}

interface CartItemT {
  name: string;
  price: number;
  count: number;
  image: string;
  options: CartMenuOptionT[];
}

type CartItemsT = CartItemT[];

interface OrderHistoryItemT {
  orderHistoryId: string;
  orderedAt: string;
  totalPrice: number;
  status: "pending" | "approved" | "disapproved";
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
