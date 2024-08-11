import { BASE_URL, MenuT } from "@/shared";

type ResponseData = MenuT[] | [];
const getMenu = async (
  storeId: string,
  menuId: string,
): Promise<ResponseData> => {
  const res = await fetch(
    `${BASE_URL}/api/menu?storeId=${storeId}&menuId=${menuId}`,
  );
  if (res.ok) {
    const data: MenuT[] = await res.json();
    return data;
  }
  const errorData = await res.json();

  console.error(errorData || "알 수 없는 오류 발생");
  return [];
  // throw new Error(errorData.message || "알 수 없는 오류 발생");
};

export default getMenu;
