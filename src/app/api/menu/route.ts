import { SERVICE_URL, fetchWithFallback } from "@/shared";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url, `http://${request.headers.get("host")}`);
    const storeId = url.searchParams.get("storeId") as string;
    const menuId = url.searchParams.get("menuId") as string;

    if (Number.isNaN(storeId) || Number.isNaN(menuId)) {
      return new Response(JSON.stringify({ error: "Invalid storeId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const res = await fetchWithFallback(
      `${SERVICE_URL}/stores/${storeId}/menus`,
      "no-cache",
    );

    const data = await res.json();
    return new Response(JSON.stringify(data), {
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
