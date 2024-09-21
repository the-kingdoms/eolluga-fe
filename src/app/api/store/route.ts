import { MenuItemT, StoreInfoT } from "@/entities";
import { CategoryItemT } from "@/entities/store/api/store";
import { SERVICE_URL, fetchWithThrottle, parseJSON } from "@/shared";

const fetchStoreInfo = async (
  storeId: string,
): Promise<StoreInfoT | Record<string, unknown>> => {
  try {
    const storeRes = await fetchWithThrottle(
      `${SERVICE_URL}/stores/${storeId}`,
      "no-cache",
    );
    const storeData = await parseJSON(storeRes);
    return storeData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    // eslint-disable-next-line no-console
    console.error(`getStoreInfo: (storeId: ${storeId}): ${message}`);
    return {};
  }
};

const fetchMenus = async (storeId: string): Promise<MenuItemT[] | []> => {
  try {
    const menuRes = await fetchWithThrottle(
      `${SERVICE_URL}/stores/${storeId}/menus`,
      "no-cache",
    );
    const menuData = await parseJSON(menuRes);
    if (!menuRes.ok) {
      throw new Error(`${menuRes.status} ${menuData.error}`);
    }
    return menuData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    // eslint-disable-next-line no-console
    console.error(`getMenu: ${message}`);
    return [];
  }
};

const fetchCategories = async (storeId: string): Promise<CategoryItemT[]> => {
  try {
    const categoriesRes = await fetchWithThrottle(
      `${SERVICE_URL}/stores/${storeId}/menu-categories`,
      "no-cache",
    );
    const categoriesData = await parseJSON(categoriesRes);
    return categoriesData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    // eslint-disable-next-line no-console
    console.error(`getCategories: ${message}`);
    return [];
  }
};

export async function GET(request: Request) {
  try {
    const url = new URL(request.url, `http://${request.headers.get("host")}`);
    const storeId = url.searchParams.get("storeId") as string;
    if (!storeId) {
      return new Response(
        JSON.stringify({ error: "StoreId가 존재하지 않습니다." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const [storeInfo, menus, categories] = await Promise.all([
      fetchStoreInfo(storeId),
      fetchMenus(storeId),
      fetchCategories(storeId),
    ]);
    return new Response(JSON.stringify({ storeInfo, menus, categories }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
