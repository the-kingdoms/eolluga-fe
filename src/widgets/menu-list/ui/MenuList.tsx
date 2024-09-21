"use client";

import { useEffect, useRef, useState } from "react";

import { MenuItemT } from "@/entities";
import { CategoryItemT } from "@/entities/store/api/store";
import { calculateCartTotalPrice } from "@/shared";

import getMenuListByCategory from "../utils/getMenuListByCategory";
import Categories from "./Categories";
import MenuItems from "./MenuItems";

export default function MenuList({
  tableId,
  storeId,
  categories,
  menus,
}: {
  tableId: number;
  storeId: string;
  categories: CategoryItemT[];
  menus: MenuItemT[];
}) {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activatedCategory, setActivatedCategory] = useState<string>(
    categories[0]?.name || "",
  );
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentCategory = categories[0].name;

      categories.forEach(category => {
        const sectionElement = sectionRefs.current[category.name];
        if (
          sectionElement &&
          sectionElement.offsetTop + sectionElement.offsetHeight / 6 <=
            scrollPosition
        ) {
          currentCategory = category.name;
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsCartVisible(calculateCartTotalPrice() > 0);
    }
  }, []);

  if (!menus || !categories) return null;
  return (
    <div className={isCartVisible ? "pb-[100px]" : ""}>
      <div className="sticky top-[48px] z-30 h-[74px] bg-white pt-[16px]">
        <Categories
          categories={categories.map(category => category.name)}
          activatedCategory={activatedCategory}
          setActivatedCategory={handleCategorySelect}
        />
        <div className="absolute bottom-0 h-[1px] w-full bg-[#c6c6c6]" />
      </div>
      {categories.map((category, idx) => (
        <div
          key={category.name}
          ref={el => {
            sectionRefs.current[category.name] = el;
          }}
        >
          <MenuItems
            category={category.name}
            menus={getMenuListByCategory(category.name, menus)}
            storeId={storeId}
            tableId={tableId}
          />
          {idx !== categories.length - 1 ? (
            <div className="mt-[24px] h-[16px] bg-[#f4f4f4]" />
          ) : (
            <div className="h-[16px]" />
          )}
        </div>
      ))}
    </div>
  );
}
