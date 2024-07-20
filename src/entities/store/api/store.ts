export interface MenuT {
  id: number;
  category: string;
  name: string;
  content: string;
  price: number;
  imageUrl: string;
}

export interface StoreT {
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
  menuList: MenuT[];
}
