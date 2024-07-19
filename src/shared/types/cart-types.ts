export interface OptionT {
  name: string;
  additionalPrice: number;
}

export interface MenuT {
  id: string;
  name: string;
  price: number;
  count: number;
  options: OptionT[];
}

export type CartDataT = MenuT[];
