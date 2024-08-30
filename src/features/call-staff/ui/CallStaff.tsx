"use client";

import { useState } from "react";

import callStaff from "../api/callStaff";
import ToastNotification from "./ToastNotification";

export default function CallStaff({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: number;
}) {
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleClick = async () => {
    callStaff(storeId, tableId);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <>
      <button
        aria-label="직원 호출"
        type="button"
        className="flex h-[40px] items-center space-x-[4px] rounded-full bg-[#131313] px-[16px] py-[12px] text-sm font-bold text-white"
        onClick={handleClick}
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99994 1.83325C7.99994 1.55711 8.2238 1.33325 8.49994 1.33325C8.77608 1.33325 8.99994 1.55711 8.99994 1.83325V2.1989C10.8808 2.4439 12.9999 4.05228 12.9999 5.99992V8.13325C12.9999 9.02975 13.2306 10.0312 13.6309 10.6645C13.9075 11.1019 13.8743 11.6357 13.695 12.035C13.5154 12.4348 13.1225 12.8333 12.5519 12.8333H4.44798C3.87742 12.8333 3.48452 12.4348 3.30491 12.035C3.12557 11.6357 3.0924 11.1019 3.36896 10.6645C3.7693 10.0312 3.99995 9.02975 3.99995 8.13325V5.99992C3.99995 4.05229 6.1191 2.44391 7.99994 2.1989V1.83325ZM11.9999 8.13325V5.99992C11.9999 4.43511 10.0648 3.16659 8.49995 3.16659C6.93514 3.16659 4.99995 4.43511 4.99995 5.99992V8.13325C4.99995 9.28088 4.67645 10.4677 4.2142 11.1989C4.15756 11.2884 4.14083 11.4554 4.2171 11.6252C4.2931 11.7944 4.395 11.8333 4.44798 11.8333H12.5519C12.6049 11.8333 12.7068 11.7944 12.7828 11.6252C12.8591 11.4554 12.8423 11.2884 12.7857 11.1989C12.3234 10.4677 11.9999 9.28088 11.9999 8.13325ZM6.99994 13.6666C6.7238 13.6666 6.49994 13.8904 6.49994 14.1666C6.49994 14.4427 6.7238 14.6666 6.99994 14.6666H9.99994C10.2761 14.6666 10.4999 14.4427 10.4999 14.1666C10.4999 13.8904 10.2761 13.6666 9.99994 13.6666H6.99994Z"
            fill="white"
          />
        </svg>
        <span>직원 호출</span>
      </button>

      <ToastNotification showToast={showToast} />
    </>
  );
}
