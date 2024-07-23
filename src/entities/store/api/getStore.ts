import { BASE_URL } from "@/shared";

import { MenuItemT, StoreDataT, StoreInfoT } from "./store";

interface GetStoreResultT {
  storeInfo: StoreInfoT;
  categories: string[];
  menu: MenuItemT[];
}

const getStore = async (storeId: number): Promise<GetStoreResultT> => {
  const res = await fetch(`${BASE_URL}/api/store?storeId=${storeId}`);
  if (res.ok) {
    const data: StoreDataT = await res.json();
    return {
      storeInfo: data.storeInfo,
      categories: data.categories,
      menu: data.menu,
    };
  }
  const errorData = await res.json();
  throw new Error(errorData.message || "알 수 없는 오류 발생");
};

export default getStore;
