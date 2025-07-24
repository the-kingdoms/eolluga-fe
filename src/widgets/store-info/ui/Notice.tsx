import { useEffect, useRef, useState } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */

export default function Notice({ notice }: { notice: string }) {
  // 아코디언이 펼쳐졌는지 여부를 저장하는 상태
  const [isExpanded, setIsExpanded] = useState(false);
  // 공지사항이 3줄을 넘어 아코디언 UI를 적용할지 여부를 저장하는 상태
  const [isAccordion, setIsAccordion] = useState(false);
  const noticeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // notice 내용이 변경될 때마다 실행
    if (noticeRef.current) {
      // CSS에서 실제 line-height 값을 가져옴
      const lineHeight = parseInt(
        window.getComputedStyle(noticeRef.current).lineHeight,
        10,
      );
      // 전체 높이를 한 줄의 높이로 나누어 실제 줄 수를 계산
      const lines = Math.ceil(noticeRef.current.scrollHeight / lineHeight);

      // 계산된 줄 수가 3줄을 초과하면 아코디언 활성화
      if (lines > 3) {
        setIsAccordion(true);
      }
    }
  }, [notice]);

  if (!notice) return null;

  // 아코디언 상태를 토글하는 함수
  const toggleAccordion = () => {
    if (isAccordion) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`flex justify-between overflow-hidden rounded-xl bg-[#F4F4F4] px-[16px] py-[12px] text-xs transition-[max-height] duration-300 ${
        // 아코디언 모드일 때만 클릭 가능하도록 커서 변경
        isAccordion ? "cursor-pointer" : ""
      }`}
      style={{
        // 아코디언 모드일 때, 펼침/닫힘 상태에 따라 최대 높이를 조절
        maxHeight: isAccordion ? (isExpanded ? "1000px" : "64px") : "none",
      }}
      // 전체 영역 클릭 시 아코디언 토글
      onClick={toggleAccordion}
      // 키보드 접근성
      onKeyDown={e => e.key === "Enter" && toggleAccordion()}
      role="button"
      tabIndex={0}
    >
      <div className="flex">
        <div className="flex items-start">
          <svg
            className="shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 14.5L7.5 19C7.5 19.2761 7.72386 19.5 8 19.5H9C9.27614 19.5 9.5 19.2761 9.5 19V14.5H7.5ZM6 14.3132L6 19C6 20.1046 6.89543 21 8 21H9C10.1046 21 11 20.1046 11 19V14.629L16.312 17.3707C17.3104 17.886 18.5 17.1613 18.5 16.0378V4.4622C18.5 3.33871 17.3104 2.61399 16.312 3.12927L10.75 6L7.25 6C4.90279 6 3 7.90279 3 10.25C3 12.1622 4.26283 13.7794 6 14.3132ZM7.25 13C5.73122 13 4.5 11.7688 4.5 10.25C4.5 8.73122 5.73122 7.5 7.25 7.5L10.75 7.5C10.9894 7.5 11.2253 7.44271 11.438 7.33293L17 4.4622V16.0378L11.438 13.1671C11.2253 13.0573 10.9894 13 10.75 13H10.5L7.25 13ZM19.5 8.5C19.5 8.08579 19.8358 7.75 20.25 7.75C20.6642 7.75 21 8.08579 21 8.5L21 13C21 13.4142 20.6642 13.75 20.25 13.75C19.8358 13.75 19.5 13.4142 19.5 13L19.5 8.5Z"
              fill="#262626"
            />
          </svg>
        </div>
        <p
          className={`mx-4 inline-block overflow-hidden leading-5 ${
            // 아코디언 모드이고 닫혀있을 때만 3줄 말줄임 처리
            isAccordion && !isExpanded ? "line-clamp-3" : ""
          }`}
          ref={noticeRef}
        >
          {notice}
        </p>
      </div>

      {/* 아코디언 모드일 때만 '더보기' 버튼 표시 */}
      {isAccordion && (
        <button
          type="button"
          onClick={e => {
            // 버튼 클릭 시 부모 div의 onClick 이벤트가 실행되는 것을 방지
            e.stopPropagation();
            toggleAccordion();
          }}
          className="flex self-start"
          aria-label="더보기"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.66354 5.97519C2.87283 5.77786 3.20246 5.78756 3.39979 5.99685L9.89583 12.8866L16.3919 5.99685C16.5892 5.78756 16.9188 5.77787 17.1281 5.9752C17.3374 6.17253 17.3471 6.50216 17.1498 6.71145L10.2748 14.0031C10.1764 14.1075 10.0393 14.1666 9.89583 14.1666C9.75238 14.1666 9.61529 14.1075 9.51688 14.0031L2.64188 6.71145C2.44455 6.50216 2.45425 6.17253 2.66354 5.97519Z"
              fill="#262626"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
