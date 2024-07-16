import { Dispatch, SetStateAction } from "react";

export default function Categories({
  categories,
  activedCategory,
  setActivedCategory,
}: {
  categories: string[];
  activedCategory: string;
  setActivedCategory: Dispatch<SetStateAction<string>>;
}) {
  const handleCategorySelect = (category: string) => {
    setActivedCategory(category);
  };
  return (
    <ul className="flex space-x-[7px]">
      {categories.map((category) => (
        <li
          className={`cursor-pointer	 border rounded-full border-[#131313] py-[8px] px-[12px] shrink-0	 ${
            activedCategory === category && "bg-[#131313] text-white "
          }`}
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
