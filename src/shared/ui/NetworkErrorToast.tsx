"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function NetworkErrorToast({
  isNetworkError,
  onClose,
  onRetry,
}: {
  isNetworkError: boolean;
  onClose: () => void;
  onRetry: () => void;
}) {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isNetworkError) {
      timer = setTimeout(() => {
        onClose();
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [isNetworkError, onClose]);

  if (!isNetworkError) return null;

  return ReactDOM.createPortal(
    <div className="fixed left-1/2 top-2 z-50 flex w-max -translate-x-1/2 items-center space-x-[8px] rounded-full bg-[#393939] px-[20px] py-[12px] text-white shadow-lg">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663ZM9.37484 6.24996C9.37484 5.90478 9.65466 5.62496 9.99984 5.62496C10.345 5.62496 10.6248 5.90478 10.6248 6.24996V11.6666C10.6248 12.0118 10.345 12.2916 9.99984 12.2916C9.65466 12.2916 9.37484 12.0118 9.37484 11.6666V6.24996ZM10.6248 13.75C10.6248 14.0951 10.345 14.375 9.99984 14.375C9.65466 14.375 9.37484 14.0951 9.37484 13.75C9.37484 13.4048 9.65466 13.125 9.99984 13.125C10.345 13.125 10.6248 13.4048 10.6248 13.75Z"
          fill="#DA1E28"
        />
      </svg>

      <p className="block min-w-[209px] shrink-0 text-xs">
        인터넷 연결이 원활하지 않습니다.
      </p>
      <button
        type="button"
        className="block shrink-0 text-xs text-[#4589FF]"
        onClick={onRetry}
      >
        다시 시도
      </button>
    </div>,
    document.body,
  );
}
