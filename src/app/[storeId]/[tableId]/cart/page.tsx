import { BackButtonWithTitle } from "@/shared";
import { Cart } from "@/widgets";

export default function Page({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { storeId: number; tableId: number };
}) {
  return (
    <div className="relative h-svh space-y-[24px]">
      <BackButtonWithTitle title="장바구니" />
      <div className="mx-[16px] h-full">
        <Cart />
      </div>
    </div>
  );
}
