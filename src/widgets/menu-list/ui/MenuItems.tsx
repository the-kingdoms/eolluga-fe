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
  return (
    <div className="px-[16px]" id="category">
      <h2 className="my-[24px] text-[28px] font-bold">{category}</h2>
      <ul>
        {menus.map((data, idx) => (
          <li key={category.concat(data.name)}>
            <Link
              href={`/${storeId}/${tableId}/menu/detail/${data.menuId}`}
              className="flex items-center justify-between space-x-[24px]"
            >
              <div className="space-y-[12px]">
                <div className="space-y-[4px]">
                  <h3 className="text-[20px] font-bold">{data.name}</h3>
                  <p className="line-clamp-2 h-[40px] text-sm text-[#6F6F6F]">
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
                <Image
                  src={data.image}
                  alt={data.name}
                  style={{ objectFit: "cover" }}
                  fill
                />
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
