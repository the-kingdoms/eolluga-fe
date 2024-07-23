import React from "react";

/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
interface CountBtnProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountBtn: React.FC<CountBtnProps> = ({ count, setCount }) => {
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
      <button className="h-[20px] w-[20px]" onClick={handleDecrement}>
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
      <button className="h-[20px] w-[20px]" onClick={handleIncrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.625 5.625C10.625 5.27982 10.3452 5 10 5C9.65482 5 9.375 5.27982 9.375 5.625V9.375H5.625C5.27982 9.375 5 9.65482 5 10C5 10.3452 5.27982 10.625 5.625 10.625H9.375V14.375C9.375 14.7202 9.65482 15 10 15C10.3452 15 10.625 14.7202 10.625 14.375V10.625H14.375C14.7202 10.625 15 10.3452 15 10C15 9.65482 14.7202 9.375 14.375 9.375H10.625V5.625Z"
            fill="#262626"
          />
        </svg>
      </button>
    </div>
  );
};

export default CountBtn;
