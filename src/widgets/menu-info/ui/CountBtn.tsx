import React from "react";

interface CountBtnProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function CountBtn({ count, setCount }: CountBtnProps) {
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="flex w-[95px] items-center gap-2 rounded-md border-[1px] border-solid border-[#C6C6C6] p-2">
      <button
        type="button"
        className="h-[20px] w-[20px]"
        onClick={handleDecrement}
        aria-label="minus-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 10C5 9.65482 5.27982 9.375 5.625 9.375H14.375C14.7202 9.375 15 9.65482 15 10C15 10.3452 14.7202 10.625 14.375 10.625H5.625C5.27982 10.625 5 10.3452 5 10Z"
            fill="#262626"
          />
        </svg>
      </button>
      <div className="font-Pretendard font-regular flex-1 text-center text-sm">
        {count}
      </div>
      <button
        type="button"
        className="h-[20px] w-[20px]"
        onClick={handleIncrement}
        aria-label="plus-button"
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.125 5.625C11.125 5.27982 10.8452 5 10.5 5C10.1548 5 9.875 5.27982 9.875 5.625V9.375H6.125C5.77982 9.375 5.5 9.65482 5.5 10C5.5 10.3452 5.77982 10.625 6.125 10.625H9.875V14.375C9.875 14.7202 10.1548 15 10.5 15C10.8452 15 11.125 14.7202 11.125 14.375V10.625H14.875C15.2202 10.625 15.5 10.3452 15.5 10C15.5 9.65482 15.2202 9.375 14.875 9.375H11.125V5.625Z"
            fill="#262626"
          />
        </svg>
      </button>
    </div>
  );
}
