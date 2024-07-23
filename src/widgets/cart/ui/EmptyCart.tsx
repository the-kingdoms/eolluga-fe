import Image from "next/image";

export default function EmptyCart() {
  return (
    <div className="absolute top-0 flex h-svh w-full flex-col items-center justify-center space-y-[24px]">
      <Image src="/empty-cart.png" width={284} height={238} alt="빈 카트" />
      <Image
        src="/empty-cart-text.png"
        width={299}
        height={36}
        alt="메뉴를 담으러 가볼까요?"
      />
    </div>
  );
}
