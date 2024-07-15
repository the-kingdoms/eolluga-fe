import { StoreInfo } from "@/widgets";

export default function Page({
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  return (
    <div>
      <StoreInfo storeId={params.storeId} tableId={params.tableId} />
    </div>
  );
}
