import Image from "next/image";

export default function StoreImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative h-[240px] w-full text-center">
      <Image
        src={imageSrc || "/image/default-store.png"}
        alt="매장 이미지"
        sizes="100vw"
        style={{ objectFit: "cover" }}
        fill
        priority
      />
      <div
        className="absolute inset-0 h-[84px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(08, 08, 08, 0) 0%, rgba(08, 08, 08, 0.5) 100%)",
        }}
      />
    </div>
  );
}
