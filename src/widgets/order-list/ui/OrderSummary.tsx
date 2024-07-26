import Image from "next/image";

import { OrderItemT } from "@/shared";

export default function OrderSummary({ data }: { data: OrderItemT }) {
  return (
    <div>
      <p className="mb-[16px] block text-sm text-[#6F6F6F]">{data.orderedAt}</p>
      <div className="flex justify-between">
        <div>
          <div className="space-y-[4px]">
            <p className="block font-bold">
              {data.items.length > 1
                ? `${data.items[0].name} 외 ${data.items.length - 1}개`
                : data.items[0].name}
            </p>

            <p className="block text-sm font-bold">
              {data.orderTotal.toLocaleString()}원
            </p>
          </div>
        </div>
        <div className="relative h-[64px] w-[64px] overflow-hidden rounded-lg">
          <Image
            src={data.items[0].imageUrl}
            alt={data.items[0].name}
            fill
            style={{ objectFit: "fill" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
