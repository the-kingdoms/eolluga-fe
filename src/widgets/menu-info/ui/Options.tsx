import React, { Dispatch, SetStateAction } from "react";

import { MenuOptionT } from "@/shared";
import formatNumber from "@/shared/utils/formatNumber";

interface OptionsProps {
  optionList: MenuOptionT[];
  selectedOptions: { [key: string]: string[] };
  setSelectedOptions: Dispatch<SetStateAction<{ [key: string]: string[] }>>;
}

export default function Options({
  optionList,
  selectedOptions,
  setSelectedOptions,
}: OptionsProps) {
  const handleOptionChange = (
    optionTitle: string,
    choice: "SINGLE" | "MULTIPLE",
    optionValue: string,
    isChecked: boolean,
  ) => {
    setSelectedOptions(prev => {
      const newSelections = { ...prev };
      if (isChecked) {
        if (choice === "SINGLE") {
          newSelections[optionTitle] = [optionValue];
        } else {
          newSelections[optionTitle] = newSelections[optionTitle]
            ? [...newSelections[optionTitle], optionValue]
            : [optionValue];
        }
      } else {
        newSelections[optionTitle] = newSelections[optionTitle].filter(
          value => value !== optionValue,
        );
      }
      return newSelections;
    });
  };

  return (
    <>
      {optionList.map((option, index) => (
        <div
          className="flex w-full flex-col items-start gap-5 bg-white px-4 py-5"
          key={index}
        >
          <div className="flex w-full flex-col items-start gap-1">
            <div className="flex w-full items-center justify-between">
              <div className="font-Pretendard text-base font-bold">
                {option.title}
              </div>
              {option.required ? (
                <div className="font-Pretendard text-sm font-bold text-[#0043CE]">
                  필수
                </div>
              ) : (
                <div className="font-Pretendard text-sm font-bold text-[#6F6F6F]">
                  선택
                </div>
              )}
            </div>
            {option.max && (
              <div className="font-Pretendard font-regular text-xs text-[#6F6F6F]">
                최대 {option.max}개 선택 가능
              </div>
            )}
            {option.min && (
              <div className="font-Pretendard font-regular text-xs text-[#6F6F6F]">
                {option.min}개 선택 필수
              </div>
            )}
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            {option.content.map((key, idx) => (
              <div
                className="flex w-full items-start justify-between"
                key={idx}
              >
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="flex w-full items-start justify-between">
                    <div className="flex h-[24px] cursor-pointer items-center gap-2">
                      <input
                        type={
                          option.choice === "MULTIPLE" ? "checkbox" : "radio"
                        }
                        name={option.title}
                        value={key.name}
                        checked={
                          selectedOptions[option.title]?.includes(key.name) ||
                          false
                        }
                        onChange={e =>
                          handleOptionChange(
                            option.title,
                            option.choice,
                            key.name,
                            e.target.checked,
                          )
                        }
                      />
                      <div className="font-Pretendard font-regular text-base">
                        {key.name}
                      </div>
                    </div>
                    <div className="font-Pretendard text-base font-bold">
                      +{formatNumber(key.price)}원
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
