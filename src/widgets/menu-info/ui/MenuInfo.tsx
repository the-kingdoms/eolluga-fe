"use client";

/* eslint-disable react/function-component-definition */

/* eslint-disable no-console */
import { useEffect, useState } from "react";

import Image from "next/image";

import { Menu } from "@/shared/types/menu-detail-types";
import formatNumber from "@/shared/utils/formatNumber";

import ButtonBar from "./ButtonBar";
import CountBtn from "./CountBtn";
import Options from "./Options";

const MenuInfo: React.FC = () => {
  const [count, setCount] = useState(1);
  const [allRequiredOptionsSelected, setAllRequiredOptionsSelected] =
    useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/menu.json");
        const data: Menu = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    if (menu) {
      const requiredOptions = menu.options.filter(
        option => option.optional === "required",
      );
      const allRequiredSelected = requiredOptions.every(
        option => selectedOptions[option.title]?.length > 0,
      );
      setAllRequiredOptionsSelected(allRequiredSelected);
    }
  }, [selectedOptions, menu]);

  if (!menu) return <div>Loading...</div>;

  return (
    <>
      <Image
        src="/image/menu-detail/image1.png"
        alt="image"
        width={360}
        height={240}
      />
      <div className="flex flex-col items-center gap-4 bg-[#F4F4F4]">
        <div className="inline-flex w-full flex-col items-start gap-10 bg-white py-6">
          <div className="flex flex-col gap-2 px-4">
            <div className="font-Pretendard text-xl font-bold">{menu.name}</div>
            <div className="font-Pretendard font-regular text-base text-[#6F6F6F]">
              {menu.description}
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 px-4">
            <div className="flex items-start justify-between">
              <div className="font-Pretendard text-base font-bold">가격</div>
              <div className="font-Pretendard text-base font-bold">
                {formatNumber(menu.price)}원
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-Pretendard text-base font-bold">수량</div>
              <CountBtn count={count} setCount={setCount} />
            </div>
          </div>
        </div>
        <Options
          optionList={menu.options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <div className="flex w-full flex-col items-center pb-4">
          <span className="font-Pretendard text-xs text-[#6F6F6F]">
            모든 메뉴의 이미지는 실물과 상이할 수 있습니다.
          </span>
        </div>
      </div>
      <ButtonBar
        isEnabled={allRequiredOptionsSelected}
        totalPrice={calculateTotalPrice(menu, selectedOptions, count)}
      />
    </>
  );
};

export default MenuInfo;
