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
/*
export interface StoreInfoT {
  store_id: UUID;
  owner_id: UUID;
  name: string;
  introduction: string;
  image: string;
  phone: string;
  adress: string;
  created_at: Date;
  updated_at: Date;
  opening_hour: string;
  original_info: string | null;
  external_notice: string | null;
  internal_notice: string | null;
}
*/

export interface MenuItemT {
  id: number;
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
