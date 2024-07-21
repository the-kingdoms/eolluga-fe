"use client";

import { useEffect, useRef, useState } from "react";
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import { MenuItemT } from "@/entities";
import getMenuListByCategory from "../utils/getMenuListByCategory";

export default function MenuList({
  tableId,
  storeId,
  categories,
  menu,
}: {
  tableId: number;
  storeId: number;
  categories: string[];
  menu: MenuItemT[];
}) {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activatedCategory, setActivatedCategory] = useState<string>(
    categories[0]
  );
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentCategory = categories[0];

      categories.forEach((category) => {
        const sectionElement = sectionRefs.current[category];
        if (
          sectionElement &&
          sectionElement.offsetTop + sectionElement.offsetHeight / 6 <=
            scrollPosition
        ) {
          currentCategory = category;
        }
      });

      setActivatedCategory(currentCategory);
    };

    const throttledHandleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [categories]);

  const handleCategorySelect = (category: string) => {
    setActivatedCategory(category);
    const sectionElement = sectionRefs.current[category];
    if (sectionElement) {
      isScrolling.current = true;
      window.scrollTo({
        top: sectionElement.offsetTop - 75,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    }
  };

  return (
    <div>
      <div className="sticky top-[48px] bg-white pt-[16px] z-30 h-[74px]">
        <Categories
          categories={categories}
          activatedCategory={activatedCategory}
          setActivatedCategory={handleCategorySelect}
        />
        <div className=" absolute bottom-0 h-[1px] bg-[#c6c6c6] w-full" />
      </div>
      {categories.map((category, idx) => (
        <div
          key={category}
          ref={(el) => {
            sectionRefs.current[category] = el;
          }}>
          <MenuItems
            category={category}
            menu={getMenuListByCategory(category, menu)}
            storeId={storeId}
            tableId={tableId}
          />
          {idx !== categories.length - 1 ? (
            <div className="bg-[#f4f4f4] h-[16px] mt-[24px] " />
          ) : (
            <div className="h-[16px]" />
          )}
        </div>
      ))}
    </div>
  );
}
