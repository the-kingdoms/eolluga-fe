import React from "react";

export default function ToastNotification({
  showToast,
}: {
  showToast: boolean;
}) {
  return (
    <div
      className={`fixed left-1/2 top-1/2 w-[92%] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#393939] p-4 py-[12px] text-center text-sm text-white transition-opacity duration-300 ease-in-out ${
        showToast ? "opacity-100" : "opacity-0"
      }`}
      role="alert"
      aria-live="assertive"
      aria-hidden={!showToast}
    >
      직원을 호출했어요
      <br />
      잠시만 기다려주세요
    </div>
  );
}
