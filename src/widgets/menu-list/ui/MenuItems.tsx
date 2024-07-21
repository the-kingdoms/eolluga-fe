import { MenuItemT } from "@/entities";
import Image from "next/image";
import Link from "next/link";

export default function MenuItems({
  category,
  menu,
  storeId,
  tableId,
}: {
  category: string;
  menu: MenuItemT[];
  storeId: number;
  tableId: number;
}) {
  return (
    <div className="px-[16px]" id="category">
      <h2 className="text-[28px] font-bold my-[24px]">{category}</h2>
      <ul>
        {menu.map((data, idx) => (
          <li key={category.concat(data.name)}>
            <Link
              href={`/${storeId}/${tableId}/menu/detail/${data.id}`}
              className="flex justify-between space-x-[24px] items-center">
              <div className="space-y-[12px]">
                <div className="space-y-[4px]">
                  <h3 className="text-[20px] font-bold">{data.name}</h3>
                  <p className="text-sm text-[#6F6F6F] h-[40px] line-clamp-2	">
                    {data.content}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[20px]">
                    {data.price.toLocaleString()}원
                  </p>
                </div>
              </div>
              <div className="relative w-[100px] h-[100px] rounded-lg overflow-hidden shrink-0 ">
                <Image
                  src={data.imageUrl}
                  alt={data.name}
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
            </Link>
            {idx !== menu.length - 1 && (
              <div className="w-full h-[1px] bg-[#c6c6c6] my-[16px]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
