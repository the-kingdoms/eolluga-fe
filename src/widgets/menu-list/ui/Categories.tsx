import ScrollContainer from "react-indiana-drag-scroll";

export default function Categories({
  categories,
  activatedCategory,
  setActivatedCategory,
}: {
  categories: string[];
  activatedCategory: string;
  setActivatedCategory: (category: string) => void;
}) {
  // const dragScrollRef = useRef<HTMLUListElement>(null);
  return (
    <ScrollContainer className="scroll-container flex space-x-[7px] list-none	">
      {categories.map((category) => (
        <li
          key={category}
          className={`cursor-pointer	 border rounded-full border-[#131313] py-[8px] px-[12px] shrink-0	 ${
            activatedCategory === category && "bg-[#131313] text-white "
          }`}
          onClick={() => setActivatedCategory(category)}>
          {category}
        </li>
      ))}
    </ScrollContainer>
  );
}
