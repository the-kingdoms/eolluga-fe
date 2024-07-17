export interface Option {
  name: string;
  additionalPrice: number;
}

export interface Menu {
  id: string;
  name: string;
  price: number;
  count: number;
  options: Option[];
}

export type CartData = Menu[];
