"use client";

/* eslint-disable no-console */
import { useEffect, useState } from "react";

import Image from "next/image";

import { MenuOptionT } from "@/entities";
import { CallStaff } from "@/features";
import { OptionT } from "@/shared/types/menu-detail-types";
import formatNumber from "@/shared/utils/formatNumber";

import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import ButtonBar from "./ButtonBar";
import CountBtn from "./CountBtn";
import Options from "./Options";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MenuInfo({ data }: { data: MenuOptionT[] }) {
  const [count, setCount] = useState(1);
  const [allRequiredOptionsSelected, setAllRequiredOptionsSelected] =
    useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});
  const menu = {
    menuId: "1",
    storeId: "1",
    category: "대표 메뉴",
    name: "까르보나라",
    content: "크림 소스가 듬뿍 들어간 까르보나라입니다.",
    price: 13000,
    image: "/image/menu-test.png",
  };
  const option: OptionT[] = [
    {
      menuOptionId: "1",
      menuId: "1",
      title: "면 추가",
      content: [
        { name: "조금", price: 1000 },
        { name: "많이", price: 1500 },
      ],
      required: false,
      isMulti: false,
      min: null,
      max: null,
    },
    {
      menuOptionId: "2",
      menuId: "1",
      title: "매운맛",
      content: [
        { name: "안 매움", price: 0 },
        { name: "매움", price: 0 },
      ],
      required: true,
      isMulti: false,
      min: null,
      max: null,
    },
    {
      menuOptionId: "3",
      menuId: "1",
      title: "토핑",
      content: [
        { name: "어니언 후레이크", price: 0 },
        { name: "파슬리", price: 0 },
        { name: "후추", price: 0 },
      ],
      required: false,
      isMulti: true,
      min: null,
      max: 2,
    },
  ];

  useEffect(() => {
    if (menu) {
      const requiredOptions = option.filter(c => c.required);
      const allRequiredSelected = requiredOptions.every(
        c => selectedOptions[c.title]?.length > 0,
      );
      setAllRequiredOptionsSelected(allRequiredSelected);
    }
  }, [selectedOptions, menu]);
  const totalPrice = calculateTotalPrice(menu, selectedOptions, option, count);

  return (
    <>
      <div className="relative h-[240px] w-full">
        <Image src={menu.image} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center gap-4 bg-[#F4F4F4]">
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
          optionList={option}
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
        <CallStaff />
      </div>
      <ButtonBar
        isEnabled={allRequiredOptionsSelected}
        totalPrice={totalPrice}
      />
    </>
  );
}
