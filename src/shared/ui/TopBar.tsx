"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function TopBar({
  showBackButton = true,
  showOrderLink = true,
  showCartLink = true,
  storeId,
  tableId,
  storeName,
}: {
  showBackButton?: boolean;
  showOrderLink?: boolean;
  showCartLink?: boolean;
  storeId?: number;
  tableId?: number;
  storeName?: string;
}) {
  const [isIconWhite, setIsIconWhite] = useState<boolean>(true);
  const [isStoreNameVisible, setIsStoreNameVisible] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 241) {
        navRef.current?.classList.add("bg-white");
        setIsIconWhite(false);
      } else {
        navRef.current?.classList.remove("bg-white");
        setIsIconWhite(true);
      }
      if (window.scrollY >= 289) {
        setIsStoreNameVisible(true);
      } else {
        setIsStoreNameVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const router = useRouter();

  return (
    <nav
      className="fixed top-0 items-center py-[16px] z-50 flex justify-between w-full px-[24px] h-[48px] justify-items-end	"
      ref={navRef}>
      <div className="">
        {showBackButton && (
          <button onClick={router.back} className="flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7047 3.32124C16.9415 3.57239 16.9299 3.96795 16.6788 4.20475L8.41106 12L16.6788 19.7953C16.9299 20.0321 16.9415 20.4276 16.7047 20.6788C16.4679 20.9299 16.0724 20.9415 15.8212 20.7047L7.07124 12.4547C6.946 12.3367 6.875 12.1721 6.875 12C6.875 11.8279 6.946 11.6633 7.07124 11.5453L15.8212 3.29526C16.0724 3.05846 16.4679 3.0701 16.7047 3.32124Z"
                fill={isIconWhite ? "#FFFFFF" : "#262626"}
              />
            </svg>
          </button>
        )}
        {storeName && isStoreNameVisible && (
          <div className="font-bold text-xl">{storeName}</div>
        )}
      </div>
      <div className="flex space-x-[20px]">
        {showOrderLink && (
          <div>
            <Link href={`/${storeId}/${tableId}/order`} aria-label="주문내역">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.41667 1.66666C4.38113 1.66666 3.54167 2.50612 3.54167 3.54166V17.7083C3.54167 17.9311 3.66027 18.1371 3.85296 18.2489C4.04566 18.3607 4.28332 18.3615 4.47675 18.251L7.08333 16.7615L9.68991 18.251C9.88206 18.3608 10.1179 18.3608 10.3101 18.251L12.9167 16.7615L15.5232 18.251C15.7167 18.3615 15.9543 18.3607 16.147 18.2489C16.3397 18.1371 16.4583 17.9311 16.4583 17.7083V3.54166C16.4583 2.50612 15.6189 1.66666 14.5833 1.66666H5.41667ZM4.79167 3.54166C4.79167 3.19648 5.07149 2.91666 5.41667 2.91666H14.5833C14.9285 2.91666 15.2083 3.19648 15.2083 3.54166V16.6313L13.2268 15.499C13.0346 15.3892 12.7987 15.3892 12.6066 15.499L10 16.9885L7.39342 15.499C7.20128 15.3892 6.96539 15.3892 6.77325 15.499L4.79167 16.6313V3.54166ZM14.1667 4.99999H5.83333V6.24999H14.1667V4.99999ZM5.83333 7.49999H10.8333V8.74999H5.83333V7.49999ZM10.8333 9.99999H5.83333V11.25H10.8333V9.99999ZM12.9167 7.49999H14.1667V8.74999H12.9167V7.49999ZM14.1667 9.99999H12.9167V11.25H14.1667V9.99999Z"
                  fill={isIconWhite ? "#FFFFFF" : "#262626"}
                />
              </svg>
            </Link>
          </div>
        )}
        {showCartLink && (
          <div>
            <Link href={`/${storeId}/${tableId}/cart`} aria-label="장바구니">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.125 2.5C2.77982 2.5 2.5 2.77982 2.5 3.125C2.5 3.47018 2.77982 3.75 3.125 3.75C3.37534 3.75 3.52421 3.79825 3.61908 3.85079C3.7133 3.90297 3.79647 3.9827 3.87983 4.11295C3.96783 4.25045 4.04564 4.42737 4.13322 4.66196C4.16069 4.73552 4.19138 4.82147 4.22424 4.9135C4.27889 5.06656 4.33955 5.23643 4.40133 5.39405L5.6873 11.0202C5.96878 12.2517 7.06427 13.125 8.32754 13.125H13.3846C14.6206 13.125 15.6998 12.2882 16.0076 11.0912L17.4803 5.36398C17.5284 5.17687 17.4873 4.97803 17.3689 4.82536C17.2505 4.67268 17.0682 4.58333 16.875 4.58333H5.43374L5.41641 4.53459L5.4164 4.53456C5.38178 4.4372 5.3459 4.33624 5.30428 4.22476C5.20956 3.97107 5.09467 3.69226 4.93267 3.43913C4.76603 3.17876 4.54191 2.93297 4.22467 2.75728C3.90808 2.58196 3.54133 2.5 3.125 2.5ZM6.90587 10.7416L5.78398 5.83333H16.069L14.797 10.7799C14.6312 11.4244 14.0501 11.875 13.3846 11.875H8.32754C7.64732 11.875 7.05744 11.4047 6.90587 10.7416ZM7.91667 15.4167C7.68655 15.4167 7.5 15.6032 7.5 15.8333C7.5 16.0635 7.68655 16.25 7.91667 16.25C8.14678 16.25 8.33333 16.0635 8.33333 15.8333C8.33333 15.6032 8.14678 15.4167 7.91667 15.4167ZM6.25 15.8333C6.25 14.9129 6.99619 14.1667 7.91667 14.1667C8.83714 14.1667 9.58333 14.9129 9.58333 15.8333C9.58333 16.7538 8.83714 17.5 7.91667 17.5C6.99619 17.5 6.25 16.7538 6.25 15.8333ZM14.375 15.4167C14.1449 15.4167 13.9583 15.6032 13.9583 15.8333C13.9583 16.0635 14.1449 16.25 14.375 16.25C14.6051 16.25 14.7917 16.0635 14.7917 15.8333C14.7917 15.6032 14.6051 15.4167 14.375 15.4167ZM12.7083 15.8333C12.7083 14.9129 13.4545 14.1667 14.375 14.1667C15.2955 14.1667 16.0417 14.9129 16.0417 15.8333C16.0417 16.7538 15.2955 17.5 14.375 17.5C13.4545 17.5 12.7083 16.7538 12.7083 15.8333Z"
                  fill={isIconWhite ? "#FFFFFF" : "#262626"}
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
