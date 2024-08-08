import Image from "next/image";

export default function EmptyCart() {
  return (
    <div className="absolute left-0 top-0 flex h-svh w-full flex-col items-center justify-center space-y-[24px]">
      <Image
        src="/image/empty-cart.png"
        width={284}
        height={238}
        alt="빈 카트"
      />
      <p className="text-[28px] font-bold">메뉴를 담으러 가볼까요?</p>
    </div>
  );
}
