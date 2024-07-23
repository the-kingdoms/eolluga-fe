import ScrollContainer from "react-indiana-drag-scroll";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
export default function Categories({
  categories,
  activatedCategory,
  setActivatedCategory,
}: {
  categories: string[];
  activatedCategory: string;
  setActivatedCategory: (category: string) => void;
}) {
  return (
    <ScrollContainer className="scroll-container flex list-none space-x-[7px] px-[16px]">
      {categories.map(category => (
        <button
          type="button"
          key={category}
          className={`shrink-0 cursor-pointer rounded-full border border-[#131313] px-[12px] py-[8px] ${
            activatedCategory === category && "bg-[#131313] text-white"
          }`}
          onClick={() => setActivatedCategory(category)}
        >
          {category}
        </button>
      ))}
    </ScrollContainer>
  );
}
