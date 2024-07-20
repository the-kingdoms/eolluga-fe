import { fetchWithFallback, MOCK_SERVER_URL, parseJSON } from "@/shared";

const fetchStoreInfo = async (storeId: number) => {
  try {
    const storeRes = await fetchWithFallback(
      `${MOCK_SERVER_URL}/stores/${storeId}`,
      "force-cache"
    );
    const storeData = await parseJSON(storeRes);
    return storeData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    throw new Error(`getStoreInfo: ${message}`);
  }
};

const fetchMenu = async (storeId: number) => {
  try {
    const menuRes = await fetchWithFallback(
      `${MOCK_SERVER_URL}/menu/${storeId}`,
      "force-cache"
    );
    const menuData = await parseJSON(menuRes);
    return menuData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    throw new Error(`getMenu: ${message}`);
  }
};

const fetchCategories = async (storeId: number) => {
  try {
    const categoriesRes = await fetchWithFallback(
      `${MOCK_SERVER_URL}/categories/${storeId}`,
      "force-cache"
    );
    const categoriesData = await parseJSON(categoriesRes);
    return categoriesData;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    throw new Error(`getCategories: ${message}`);
  }
};

export async function GET(request: Request) {
  try {
    const url = new URL(request.url, `http://${request.headers.get("host")}`);
    const storeId = Number(url.searchParams.get("storeId"));
    if (isNaN(storeId)) {
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
    console.error(error);
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
