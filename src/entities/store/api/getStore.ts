import { BASE_URL } from "@/shared";

import { MenuItemT, StoreDataT, StoreInfoT } from "./store";

type GetStoreResultT = [StoreInfoT, string[], MenuItemT[]];

const getStore = async (storeId: number): Promise<GetStoreResultT> => {
  const res = await fetch(`${BASE_URL}/api/store?storeId=${storeId}`);
  if (res.ok) {
    const data: StoreDataT = await res.json();
    return [data.storeInfo, data.categories, data.menu];
  }
  const errorData = await res.json();
  throw new Error(errorData.message || "알 수 없는 오류 발생");
};

export default getStore;
