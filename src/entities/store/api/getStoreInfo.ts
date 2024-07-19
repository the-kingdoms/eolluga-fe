import { fetcher } from "@/shared";
import { StoreT } from "./store";
import { AxiosResponse } from "axios";

const getStoreInfo = async (storeId: number): Promise<StoreT> => {
  try {
    const response: AxiosResponse<any, any> = await fetcher(
      `/stores/${storeId}`,
      "get"
    );
    const data: StoreT = response.data;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`가게 정보를 가져오는 데 실패했습니다: ${error.message}`);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
};

export default getStoreInfo;
