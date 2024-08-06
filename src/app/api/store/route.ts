import {
  MOCK_SERVER_URL,
  SERVICE_URL,
  fetchWithFallback,
  parseJSON,
} from "@/shared";

const fetchStoreInfo = async (storeId: string) => {
  try {
    const storeRes = await fetchWithFallback(
      `${SERVICE_URL}/stores/${storeId}`,
      "no-store",
    );
    const storeData = await parseJSON(storeRes);
    return storeData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    // throw new Error(`getStoreInfo: ${message}`);
    console.error(`getStoreInfo: ${message}`);
    return {};
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchMenu = async (storeId: string) => {
  try {
    const menuRes = await fetchWithFallback(
      `${MOCK_SERVER_URL}/menu/1`,
      "force-cache",
    );
    const menuData = await parseJSON(menuRes);
    return menuData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    // throw new Error(`getMenu: ${message}`);
    console.error(`getMenu: ${message}`);
    return {};
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchCategories = async (storeId: string) => {
  try {
    const categoriesRes = await fetchWithFallback(
      `${MOCK_SERVER_URL}/categories/1`,
      "force-cache",
    );
    const categoriesData = await parseJSON(categoriesRes);
    return categoriesData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    // throw new Error(`getCategories: ${message}`);
    console.error(`getCategories: ${message}`);
    return {};
  }
};

export async function GET(request: Request) {
  try {
    const url = new URL(request.url, `http://${request.headers.get("host")}`);
    const storeId = url.searchParams.get("storeId") as string;
    if (Number.isNaN(storeId)) {
      return new Response(JSON.stringify({ error: "Invalid storeId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const [storeInfo, menu, categories] = await Promise.all([
      fetchStoreInfo(storeId),
      fetchMenu(storeId),
      fetchCategories(storeId),
    ]);
    return new Response(JSON.stringify({ storeInfo, menu, categories }), {
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
