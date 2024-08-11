import { MOCK_SERVER_URL, fetchWithFallback } from "@/shared";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url, `http://${request.headers.get("host")}`);
    const storeId = Number(url.searchParams.get("storeId"));
    const tableId = Number(url.searchParams.get("tableId"));
    if (Number.isNaN(storeId) || Number.isNaN(tableId)) {
      return new Response(JSON.stringify({ error: "Invalid storeId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const res = await fetchWithFallback(
      `${MOCK_SERVER_URL}/order/${storeId}/${tableId}`,
      "force-cache",
    );
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    const message =
      error instanceof Error ? error.message : "알 수 없는 에러 발생";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
