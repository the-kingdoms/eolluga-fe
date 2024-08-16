import { removeAllItemsFromCart } from "@/shared";

export default function AlertDialog({
  onCancel,
  onDelete,
}: {
  onCancel: () => void;
  onDelete: () => void;
}) {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black opacity-30" />
      <div className="fixed left-1/2 top-1/2 z-50 w-[312px] -translate-x-1/2 -translate-y-1/2 space-y-[18px] rounded-xl bg-white px-[20px] py-[28px]">
        <h1 className="text-[20px] font-bold">전체 메뉴 삭제</h1>
        <p className="text-sm"> 장바구니에 담으신 메뉴가 다 사라질거에요</p>
        <div className="flex justify-center space-x-[8px]">
          <button
            type="button"
            className="w-1/2 rounded-xl bg-[#E0E0E0] py-[12px] font-bold text-[#6F6F6F]"
            onClick={onCancel}
          >
            아니요
          </button>
          <button
            type="button"
            className="w-1/2 rounded-xl bg-[#131313] py-[12px] font-bold text-white"
            onClick={() => {
              removeAllItemsFromCart();
              onDelete();
              onCancel();
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
}
