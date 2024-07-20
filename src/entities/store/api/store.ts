export interface StoreInfoT {
  name: string;
  content: string;
  image: string;
  phone: string;
  operatingTime: string;
  url: string;
  address: string;
  paymentType: string;
  reviewCount: number;
  reviewRating: number;
  createdDate: string;
  modifiedDate: string;
  notice: string;
}

export interface MenuItemT {
  category: string;
  name: string;
  content: string;
  price: number;
  imageUrl: string;
}

export interface StoreDataT {
  storeInfo: StoreInfoT;
  menu: MenuItemT[];
  categories: string[];
}
