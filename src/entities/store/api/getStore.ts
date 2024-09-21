import { BASE_URL } from "@/shared";

import { CategoryItemT, MenuItemT, StoreDataT, StoreInfoT } from "./store";

interface GetStoreResultT {
  storeInfo: StoreInfoT | null;
  categories: CategoryItemT[] | null;
  menus: MenuItemT[] | null;
}

const getStore = async (storeId: string): Promise<GetStoreResultT> => {
  const res = await fetch(`${BASE_URL}/api/store?storeId=${storeId}`);
  if (res.ok) {
    const data: StoreDataT = await res.json();
    return {
      storeInfo: data.storeInfo,
      categories: data.categories,
      menus: data.menus,
    };
  }
  return {
    storeInfo: null,
    categories: null,
    menus: null,
  };
};

export default getStore;
