import BackButtonWithTitle from "@/shared/ui/BackButtonWithTitle";

interface OriginProps {
  contents: string;
}
export default function Origin({ contents }: OriginProps) {
  return (
    <>
      <BackButtonWithTitle title="원산지 정보" />
      <div className="font-Pretendard align-center mx-auto mt-[18px] w-full px-[16px] text-justify text-[12px] font-normal leading-[18px] tracking-[-0.25px]">
        {contents}
      </div>
    </>
  );
}
