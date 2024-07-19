"use client";

import { useState } from "react";
import Image from "next/image";

import formatNumber from "@/widgets/menu-info//utils/formatNumber";
import CountBtn from "./CountBtn";
import Options from "./Options";
import test from "../../../../public/image/menu-detail/image1.png";
import { Menu } from "@/shared/types/menu-detail-types";
import ButtonBar from "./ButtonBar";

export default function MenuInfo() {
  const [count, setCount] = useState(1);
  const [allRequiredOptionsSelected, setAllRequiredOptionsSelected] =
    useState(false);

  const menu: Menu = {
    id: 1,
    name: "토마토 파스타",
    description: "기본기 충실한 토마토 파스타와 생 모짜렐라 바질잎 가니쉬",
    price: 18000,
    options: [
      {
        title: "면 변경1",
        type: "radio",
        optional: "required",
        options: { 스파게티: 0, 링귀니: 0, 펜네: 0 },
      },
      {
        title: "면 변경2",
        type: "radio",
        optional: "optional",
        options: { 스파게티: 0, 링귀니: 0, 펜네: 0 },
      },
      {
        title: "토핑 추가1",
        description: "2개 선택 필수",
        type: "checkbox",
        optional: "required",
        options: { "치즈 추가": 3000, "토마토 추가": 3000, "바질 추가": 3000 },
      },
      {
        title: "토핑 추가2",
        description: "최대 1개 선택 가능",
        type: "checkbox",
        optional: "optional",
        options: { "치즈 추가": 3000, "토마토 추가": 3000, "바질 추가": 3000 },
      },
    ],
  };

  return (
    <>
      <Image src={test} alt="image" width={360} height={240} />
      <div className="flex flex-col gap-4 items-center bg-[#F4F4F4]">
        <div className="inline-flex flex-col w-full py-6 items-start gap-10 bg-white">
          <div className="flex flex-col gap-2">
            <div className="flex px-4 items-center">
              <span className="font-Pretendard text-xl font-bold ">
                {menu.name}
              </span>
            </div>
            <div className="flex px-4 items-center">
              <span className="font-Pretendard text-[#6F6F6F] text-base font-regular">
                {menu.description}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full px-4 items-start gap-6">
            <div className="flex w-full justify-between items-start">
              <div className="font-Pretendard text-base font-bold">가격</div>
              <div className="font-Pretendard text-base font-bold">
                {formatNumber(menu.price)}원
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="font-Pretendard text-base font-bold">수량</div>
              <CountBtn count={count} setCount={setCount} />
            </div>
          </div>
        </div>
        <Options
          optionList={menu.options}
          setAllRequiredOptionsSelected={setAllRequiredOptionsSelected}
        />
        <div className="flex flex-col w-full pb-4 items-center">
          <span className="font-Pretendard text-xs text-[#6F6F6F]">
            모든 메뉴의 이미지는 실물과 상이할 수 있습니다.
          </span>
        </div>
      </div>
      <ButtonBar isEnabled={allRequiredOptionsSelected} />
    </>
  );
}
