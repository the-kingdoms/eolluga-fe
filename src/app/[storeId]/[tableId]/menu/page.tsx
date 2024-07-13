export default function Page({
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  return (
    <div>
      <h1>메뉴(메인)</h1>
      <p>storeId: {params.storeId}</p>
      <p>tableId: {params.tableId}</p>
    </div>
  );
}
