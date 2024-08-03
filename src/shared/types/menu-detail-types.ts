interface Content {
  name: string;
  price: number;
}

export interface OptionT {
  menuOptionId: string;
  menuId: string;
  title: string;
  content: Content[];
  required: boolean;
  isMulti: boolean;
  min: number | null;
  max: number | null;
}

export interface MenuT {
  menuId: string;
  storeId: string;
  category: string;
  name: string;
  content: string;
  price: number;
  image: string;
}
