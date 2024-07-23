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

export interface OrderItemT extends ItemT {
  orderedAt: string;
}

export type CartDataT = CartItemT[];
export type OrderDataT = OrderItemT[];
