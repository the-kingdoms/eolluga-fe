import { BASE_URL, OrderDataT } from "@/shared";

type ResponseData = OrderDataT | [];
const getOrder = async (
  storeId: number,
  tableId: number,
): Promise<ResponseData> => {
  const res = await fetch(
    `${BASE_URL}/api/order?storeId=${storeId}&tableId=${tableId}`,
  );
  if (res.ok) {
    const data: OrderDataT = await res.json();
    return data;
  }
  const errorData = await res.json();

  console.error(errorData || "알 수 없는 오류 발생");
  return [];
  // throw new Error(errorData.message || "알 수 없는 오류 발생");
};

export default getOrder;
