import Image from "next/image";

export default function StoreImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative h-[240px] w-full text-center">
      <Image
        src={
          imageSrc ||
          "https://eobkvusotnvurtdlxvgr.supabase.co/storage/v1/object/sign/eolluga/image.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlb2xsdWdhL2ltYWdlLmpwZyIsImlhdCI6MTcyMjg1MDQ0MCwiZXhwIjoxNzU0Mzg2NDQwfQ.aiAQ4TZgsm1LvufWu5-voDWsytkq1LoaWMtv3XxmXFo&t=2024-08-05T09%3A33%3A59.819Z"
        }
        alt="매장 이미지"
        sizes="100vw"
        style={{ objectFit: "cover" }}
        fill
        priority
      />
    </div>
  );
}
