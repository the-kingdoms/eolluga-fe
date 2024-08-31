import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex h-svh flex-col items-center justify-center space-y-[24px]">
      <h2 className="text-2xl font-bold">페이지를 연결하지 못했습니다</h2>
      <Image
        src="/image/404-error.svg"
        width={340}
        height={280}
        alt="404 Error"
      />
      <p className="text-center font-semibold">
        인터넷 연결 오류로 인해
        <br />
        페이지를 불러오지 못했습니다.
      </p>{" "}
    </div>
  );
}
