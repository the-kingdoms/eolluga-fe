"use client";

/* eslint-disable no-console */
import { useEffect, useState } from "react";

import Image from "next/image";

import { CallStaff } from "@/features";
import { MenuOptionT, MenuT } from "@/shared";
import { addItemToCart } from "@/shared/utils/cart";
import formatNumber from "@/shared/utils/formatNumber";

import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import { getCartOptionsByMenuOptions } from "../utils/getCartOptionsByMenuOptions";
import ButtonBar from "./ButtonBar";
import CountBtn from "./CountBtn";
import Options from "./Options";

export default function MenuInfo({
  storeId,
  tableId,
  menu,
  menuOptions,
}: {
  storeId: string;
  tableId: number;
  menu: MenuT;
  menuOptions: MenuOptionT[];
}) {
  const [count, setCount] = useState(1);
  const [allRequiredOptionsSelected, setAllRequiredOptionsSelected] =
    useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    if (menu) {
      const requiredOptions = menuOptions.filter(c => c.required);
      const allRequiredSelected = requiredOptions.every(
        c => selectedOptions[c.title]?.length > 0,
      );
      setAllRequiredOptionsSelected(allRequiredSelected);
    }
  }, [selectedOptions, menu]);
  const totalPrice = calculateTotalPrice(
    menu,
    selectedOptions,
    menuOptions,
    count,
  );
  const handleClickAddCart = () => {
    console.log(selectedOptions);
    addItemToCart({
      name: menu.name,
      price: menu.price,
      count,
      options: getCartOptionsByMenuOptions(menuOptions, selectedOptions),
    });
  };

  return (
    <>
      <div className="relative h-[240px] w-full">
        <Image src={menu.image} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div className="flex min-h-[calc(100%-340px)] flex-col items-center gap-4 bg-[#F4F4F4]">
        <div className="inline-flex w-full flex-col items-start gap-10 bg-white py-6">
          <div className="flex flex-col gap-2 px-4">
            <div className="font-Pretendard text-xl font-bold">{menu.name}</div>
            <div className="font-Pretendard font-regular text-base text-[#6F6F6F]">
              {menu.content}
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
          optionList={menuOptions}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <div className="mb-[60px] flex w-full flex-col items-center pb-4">
          <span className="font-Pretendard text-xs text-[#6F6F6F]">
            모든 메뉴의 이미지는 실물과 상이할 수 있습니다.
          </span>
        </div>
      </div>
      <div className="fixed bottom-[112px] right-2 max-w-[360px]">
        <CallStaff storeId={storeId} tableId={tableId} />
      </div>
      <ButtonBar
        isEnabled={allRequiredOptionsSelected}
        totalPrice={totalPrice}
        onClick={handleClickAddCart}
      />
    </>
  );
}
