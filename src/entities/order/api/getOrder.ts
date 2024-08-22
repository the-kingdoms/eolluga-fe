import { BASE_URL, OrderHistoryT } from "@/shared";

// import { isOrderHistoryT } from "../utils/orderTypeGuards";

type ResponseData = OrderHistoryT | [];

const getOrder = async (
  storeId: number,
  tableId: number,
): Promise<ResponseData> => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/order?storeId=${storeId}&tableId=${tableId}`,
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data);
    }
    // if (!isOrderHistoryT(data)) {
    //   throw new Error("OrderHistory 타입이 아닙니다.");
    // }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } else {
      // eslint-disable-next-line no-console
      console.error("알 수 없는 오류 발생");
    }

    return [];
  }
};

export default getOrder;
