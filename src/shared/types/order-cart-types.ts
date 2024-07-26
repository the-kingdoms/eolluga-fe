export interface OptionT {
  category: string;
  name: string;
  additionalPrice: number;
}

export interface ItemT {
  id: string;
  menuId: string;
  name: string;
  price: number;
  count: number;
  imageUrl: string;
  options: OptionT[];
}

export type CartItemT = ItemT;

export interface OrderItemT {
  orderId: string;
  orderedAt: string;
  orderTotal: number;
  items: ItemT[];
}

export type CartDataT = CartItemT[];
export type OrderDataT = OrderItemT[];
