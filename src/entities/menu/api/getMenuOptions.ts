import { BASE_URL } from "@/shared";

import { MenuOptionT } from "./menu-options";

type ResponseData = MenuOptionT[] | [];
const getMenuOptions = async (
  storeId: string,
  menuId: string,
): Promise<ResponseData> => {
  const res = await fetch(
    `${BASE_URL}/api/menu-options?storeId=${storeId}&menuId=${menuId}`,
  );
  if (res.ok) {
    const data: MenuOptionT[] = await res.json();
    return data;
  }
  const errorData = await res.json();
  // eslint-disable-next-line no-console
  console.error(errorData || "알 수 없는 오류 발생");
  return [];
};

export default getMenuOptions;
