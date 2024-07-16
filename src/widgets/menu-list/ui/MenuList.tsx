"use client";

import { useState } from "react";
import useMenuList from "../model/useMenuList";
import Categories from "./Categories";

export default function MenuList({ storeId }: { storeId: number }) {
  const { menuList, categories, isPending, isSuccess } = useMenuList(storeId);
  const [activedCategory, setActivedCategory] = useState<string>("대표 메뉴");
  return (
    <div>
      <div className="pl-[16px]">
        <Categories
          categories={categories}
          activedCategory={activedCategory}
          setActivedCategory={setActivedCategory}
        />
      </div>
      <div className="h-[1px] bg-[#c6c6c6] w-full mt-[16px]" />
    </div>
  );
}
