"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopBar({
  storeId,
  tableId,
  showBackButton,
  showOrderButton,
  showCartButton,
}: {
  storeId: number;
  tableId: number;
  showBackButton?: boolean;
  showOrderButton?: boolean;
  showCartButton?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="absolute max-w-[360px] flex w-full h-[32px] pl-[14px] pr-[12px] py-1 justify-between items-center ">
      <button className="w-[20px] h-[20px] left-0" onClick={router.back}>
        {showBackButton && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9207 2.76769C14.118 2.97698 14.1083 3.30661 13.899 3.50394L7.0093 9.99999L13.899 16.496C14.1083 16.6934 14.118 17.023 13.9207 17.2323C13.7234 17.4416 13.3937 17.4513 13.1845 17.2539L5.89278 10.3789C5.78841 10.2805 5.72925 10.1434 5.72925 9.99999C5.72925 9.85654 5.78841 9.71945 5.89278 9.62104L13.1845 2.74604C13.3937 2.54871 13.7234 2.5584 13.9207 2.76769Z"
              fill="#262626"
            />
          </svg>
        )}
      </button>
      <ul className="flex space-x-[20px]">
        {showOrderButton && (
          <li>
            <Link href={`/${storeId}/${tableId}/order`} aria-label="주문내역">
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
                  d="M5.41667 1.66666C4.38113 1.66666 3.54167 2.50612 3.54167 3.54166V17.7083C3.54167 17.9311 3.66027 18.1371 3.85296 18.2489C4.04566 18.3607 4.28332 18.3615 4.47675 18.251L7.08333 16.7615L9.68991 18.251C9.88206 18.3608 10.1179 18.3608 10.3101 18.251L12.9167 16.7615L15.5232 18.251C15.7167 18.3615 15.9543 18.3607 16.147 18.2489C16.3397 18.1371 16.4583 17.9311 16.4583 17.7083V3.54166C16.4583 2.50612 15.6189 1.66666 14.5833 1.66666H5.41667ZM4.79167 3.54166C4.79167 3.19648 5.07149 2.91666 5.41667 2.91666H14.5833C14.9285 2.91666 15.2083 3.19648 15.2083 3.54166V16.6313L13.2268 15.499C13.0346 15.3892 12.7987 15.3892 12.6066 15.499L10 16.9885L7.39342 15.499C7.20128 15.3892 6.96539 15.3892 6.77325 15.499L4.79167 16.6313V3.54166ZM14.1667 4.99999H5.83333V6.24999H14.1667V4.99999ZM5.83333 7.49999H10.8333V8.74999H5.83333V7.49999ZM10.8333 9.99999H5.83333V11.25H10.8333V9.99999ZM12.9167 7.49999H14.1667V8.74999H12.9167V7.49999ZM14.1667 9.99999H12.9167V11.25H14.1667V9.99999Z"
                  fill="#262626"
                />
              </svg>
            </Link>
          </li>
        )}
        {showCartButton && (
          <li>
            <Link href={`/${storeId}/${tableId}/cart`} aria-label="장바구니">
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
                  d="M3.125 2.5C2.77982 2.5 2.5 2.77982 2.5 3.125C2.5 3.47018 2.77982 3.75 3.125 3.75C3.37534 3.75 3.52421 3.79825 3.61908 3.85079C3.7133 3.90297 3.79647 3.9827 3.87983 4.11295C3.96783 4.25045 4.04564 4.42737 4.13322 4.66196C4.16069 4.73552 4.19138 4.82147 4.22424 4.9135C4.27889 5.06656 4.33955 5.23643 4.40133 5.39405L5.6873 11.0202C5.96878 12.2517 7.06427 13.125 8.32754 13.125H13.3846C14.6206 13.125 15.6998 12.2882 16.0076 11.0912L17.4803 5.36398C17.5284 5.17687 17.4873 4.97803 17.3689 4.82536C17.2505 4.67268 17.0682 4.58333 16.875 4.58333H5.43374L5.41641 4.53459L5.4164 4.53456C5.38178 4.4372 5.3459 4.33624 5.30428 4.22476C5.20956 3.97107 5.09467 3.69226 4.93267 3.43913C4.76603 3.17876 4.54191 2.93297 4.22467 2.75728C3.90808 2.58196 3.54133 2.5 3.125 2.5ZM6.90587 10.7416L5.78398 5.83333H16.069L14.797 10.7799C14.6312 11.4244 14.0501 11.875 13.3846 11.875H8.32754C7.64732 11.875 7.05744 11.4047 6.90587 10.7416ZM7.91667 15.4167C7.68655 15.4167 7.5 15.6032 7.5 15.8333C7.5 16.0635 7.68655 16.25 7.91667 16.25C8.14678 16.25 8.33333 16.0635 8.33333 15.8333C8.33333 15.6032 8.14678 15.4167 7.91667 15.4167ZM6.25 15.8333C6.25 14.9129 6.99619 14.1667 7.91667 14.1667C8.83714 14.1667 9.58333 14.9129 9.58333 15.8333C9.58333 16.7538 8.83714 17.5 7.91667 17.5C6.99619 17.5 6.25 16.7538 6.25 15.8333ZM14.375 15.4167C14.1449 15.4167 13.9583 15.6032 13.9583 15.8333C13.9583 16.0635 14.1449 16.25 14.375 16.25C14.6051 16.25 14.7917 16.0635 14.7917 15.8333C14.7917 15.6032 14.6051 15.4167 14.375 15.4167ZM12.7083 15.8333C12.7083 14.9129 13.4545 14.1667 14.375 14.1667C15.2955 14.1667 16.0417 14.9129 16.0417 15.8333C16.0417 16.7538 15.2955 17.5 14.375 17.5C13.4545 17.5 12.7083 16.7538 12.7083 15.8333Z"
                  fill="#262626"
                />
              </svg>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}