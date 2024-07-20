import Image from "next/image";

export default function StoreImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative h-[240px] w-full">
      <Image
        src={imageSrc}
        alt="매장 이미지"
        sizes="100vw"
        style={{ objectFit: "cover" }}
        fill
        priority
      />
      ;
    </div>
  );
}
