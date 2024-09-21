/* export interface StoreInfoT {
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
} */

export interface StoreInfoT {
  storeId: string;
  name: string;
  introduction: string;
  image: string;
  phone: string;
  address: string;
  openingHour: string;
  originalInfo: string | null;
  externalNotice: string | null;
  internalNotice: string | null;
}

export interface MenuItemT {
  menuId: string;
  storeId: string;
  categories: string[];
  name: string;
  content: string;
  price: number;
  image: string;
}

export interface CategoryItemT {
  id: string;
  storeId: string;
  name: string;
}

export interface StoreDataT {
  storeInfo: StoreInfoT;
  menus: MenuItemT[];
  categories: CategoryItemT[];
}
