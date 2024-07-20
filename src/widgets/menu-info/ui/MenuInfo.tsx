"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import formatNumber from "@/shared/utils/formatNumber";
import CountBtn from "./CountBtn";
import Options from "./Options";
import ButtonBar from "./ButtonBar";
import { Menu } from "@/shared/types/menu-detail-types";
import { calculateTotalPrice } from "@/widgets/menu-info/utils/calculateTotalPrice";

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
        (option) => option.optional === "required"
      );
      const allRequiredSelected = requiredOptions.every(
        (option) => selectedOptions[option.title]?.length > 0
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
      <div className="flex flex-col gap-4 items-center bg-[#F4F4F4]">
        <div className="inline-flex flex-col w-full py-6 items-start gap-10 bg-white">
          <div className="flex flex-col gap-2 px-4">
            <div className="font-Pretendard text-xl font-bold">{menu.name}</div>
            <div className="font-Pretendard text-[#6F6F6F] text-base font-regular">
              {menu.description}
            </div>
          </div>
          <div className="flex flex-col w-full px-4 gap-6">
            <div className="flex justify-between items-start">
              <div className="font-Pretendard text-base font-bold">가격</div>
              <div className="font-Pretendard text-base font-bold">
                {formatNumber(menu.price)}원
              </div>
            </div>
            <div className="flex justify-between items-center">
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
        <div className="flex flex-col w-full pb-4 items-center">
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
