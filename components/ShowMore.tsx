"use client";
import { ShowMorePropTypes } from "@/types";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore: FC<ShowMorePropTypes> = ({ pageNumber, isNext }) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const pathName = updateSearchParams("limit", `${newLimit}`);
    router.push(pathName, {
      scroll: false,
    });
  };
  return (
    <div className=" flex-center w-full gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          handleClick={handleNavigation}
          containerStyles="bg-primary-blue text-white rounded-full"
          btnType="button"
        />
      )}
    </div>
  );
};

export default ShowMore;
