"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

const CustomButton: FC<CustomButtonProps> = ({
  handleClick,
  title,
  containerStyles,
  btnType,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="realtive w-6 h-6">
          <Image
            fill
            className="object-contain"
            src={rightIcon}
            alt="right icon"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
