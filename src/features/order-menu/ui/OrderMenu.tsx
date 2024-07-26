import orderMenu from "../api/orderMenu";

export default function OrderMenu() {
  return (
    <button
      type="button"
      className="text-large h-[48px] w-full rounded-lg bg-[#131313] text-white"
      onClick={orderMenu}
    >
      주문하기
    </button>
  );
}
