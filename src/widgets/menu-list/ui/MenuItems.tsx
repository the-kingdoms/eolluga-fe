import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { MenuItemT } from "@/entities";

export default function MenuItems({
  category,
  menus,
  storeId,
  tableId,
}: {
  category: string;
  menus: MenuItemT[];
  storeId: string;
  tableId: number;
}) {
  const [isImageExists, setIsImageExists] = useState<boolean>(true);

  return (
    <div className="px-[16px]" id="category">
      <h2 className="my-[24px] text-[28px] font-bold">{category}</h2>
      <ul>
        {menus.map((data, idx) => (
          <li key={category.concat(data.name)}>
            <Link
              href={`/${storeId}/${tableId}/menu/detail/${data.menuId}`}
              className={`flex items-center justify-between space-x-[24px] ${
                data.stockStatus === "IS_SOLD_OUT" ? "pointer-events-none" : ""
              }`}
            >
              <div
                className={`space-y-[12px] ${
                  data.stockStatus === "IS_SOLD_OUT" ? "text-gray-400" : ""
                }`}
              >
                <div className="space-y-[4px]">
                  <h3 className="text-[20px] font-bold">{data.name}</h3>
                  <p className="line-clamp-2 h-[40px] text-sm">
                    {data.content}
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-bold">
                    {data.price.toLocaleString()}원
                  </p>
                </div>
              </div>
              <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg">
                {data.image && isImageExists && (
                  <Image
                    src={data.image}
                    alt={data.name}
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 640px) 100px, 100px"
                    fill
                    priority={idx < 4}
                    onError={() => {
                      setIsImageExists(false);
                    }}
                  />
                )}
                {data.stockStatus === "IS_SOLD_OUT" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-xl font-bold text-white">품절</span>
                  </div>
                )}
              </div>
            </Link>
            {idx !== menus.length - 1 && (
              <div className="my-[16px] h-[1px] w-full bg-[#c6c6c6]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
