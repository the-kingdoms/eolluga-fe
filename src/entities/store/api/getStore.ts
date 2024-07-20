import { BASE_URL } from "@/shared";
import { StoreDataT } from "./store";

const getStore = async (storeId: number): Promise<StoreDataT> => {
  const res = await fetch(`${BASE_URL}/api/store?storeId=${storeId}`);
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  } else {
    const errorData = await res.json();
    throw new Error(errorData.message || "알 수 없는 오류 발생");
  }
};

export default getStore;
