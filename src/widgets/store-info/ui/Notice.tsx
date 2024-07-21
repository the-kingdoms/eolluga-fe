import { useRef, useState, useEffect } from "react";

export default function Notice({ notice }: { notice: string }) {
  const [isViewingMore, setIsViewingMore] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("64px");
  const noticeRef = useRef<HTMLParagraphElement>(null);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  const checkOverflow = () => {
    if (noticeRef.current) {
      if (noticeRef.current.scrollHeight <= 40) {
        setIsOverflow(false);
      } else {
        setIsOverflow(true);
      }
    }
  };

  useEffect(() => {
    if (noticeRef.current) {
      setHeight(
        isViewingMore ? `${noticeRef.current.scrollHeight + 24}px` : "64px"
      );
      checkOverflow();
    }
  }, [isViewingMore, notice]);

  useEffect(() => {
    const handleResize = () => {
      checkOverflow();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!notice) return null;

  const handleViewMore = () => {
    setIsViewingMore(!isViewingMore);
  };

  return (
    <div
      className="bg-[#F4F4F4] text-xs px-[16px] py-[12px] flex rounded-xl overflow-hidden justify-between transition-[height] duration-300"
      style={{ height }}>
      <div className="flex">
        <div className="flex items-start ">
          <svg
            className="shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 14.5L7.5 19C7.5 19.2761 7.72386 19.5 8 19.5H9C9.27614 19.5 9.5 19.2761 9.5 19V14.5H7.5ZM6 14.3132L6 19C6 20.1046 6.89543 21 8 21H9C10.1046 21 11 20.1046 11 19V14.629L16.312 17.3707C17.3104 17.886 18.5 17.1613 18.5 16.0378V4.4622C18.5 3.33871 17.3104 2.61399 16.312 3.12927L10.75 6L7.25 6C4.90279 6 3 7.90279 3 10.25C3 12.1622 4.26283 13.7794 6 14.3132ZM7.25 13C5.73122 13 4.5 11.7688 4.5 10.25C4.5 8.73122 5.73122 7.5 7.25 7.5L10.75 7.5C10.9894 7.5 11.2253 7.44271 11.438 7.33293L17 4.4622V16.0378L11.438 13.1671C11.2253 13.0573 10.9894 13 10.75 13H10.5L7.25 13ZM19.5 8.5C19.5 8.08579 19.8358 7.75 20.25 7.75C20.6642 7.75 21 8.08579 21 8.5L21 13C21 13.4142 20.6642 13.75 20.25 13.75C19.8358 13.75 19.5 13.4142 19.5 13L19.5 8.5Z"
              fill="#262626"
            />
          </svg>
        </div>
        <p
          className="leading-5 mx-4 inline-block overflow-hidden"
          ref={noticeRef}>
          {notice}
        </p>
      </div>

      <button type="button" onClick={handleViewMore} className="flex">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition-transform duration-300 ${
            isViewingMore ? "rotate-180" : ""
          }`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.66354 5.97519C2.87283 5.77786 3.20246 5.78756 3.39979 5.99685L9.89583 12.8866L16.3919 5.99685C16.5892 5.78756 16.9188 5.77787 17.1281 5.9752C17.3374 6.17253 17.3471 6.50216 17.1498 6.71145L10.2748 14.0031C10.1764 14.1075 10.0393 14.1666 9.89583 14.1666C9.75238 14.1666 9.61529 14.1075 9.51688 14.0031L2.64188 6.71145C2.44455 6.50216 2.45425 6.17253 2.66354 5.97519Z"
            fill="#262626"
          />
        </svg>
      </button>
    </div>
  );
}
