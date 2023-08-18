import React from "react";
import { daysLeft } from "../../utils/index";

const CustomButton = ({
  btnType,
  title,
  daysLeft,
  handleClick,
  styles,
}: any) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles} ${
        Number(daysLeft) < 0 ? "opacity-60" : ""
      }`}
      onClick={handleClick}
      disabled={Number(daysLeft) < 0 ? true : false}
    >
      {Number(daysLeft) < 0 ? "Campaign Ended" : title}
    </button>
  );
};

export default CustomButton;
