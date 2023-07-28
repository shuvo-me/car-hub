"use client";

import { CardCardProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React, { FC, useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

const CarCard: FC<CardCardProps> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3">
        <Image
          src={"/hero.png"}
          fill
          className=" object-contain"
          alt="car model"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              height={20}
              width={20}
              alt="wheel"
              src={"/steering-wheel.svg"}
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Auto" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image height={20} width={20} alt="wheel" src={"/tire.svg"} />
            <p className="text-[14px] leading-[17px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image height={20} width={20} alt="wheel" src={"/gas.svg"} />
            <p className="text-[14px] leading-[17px]">{city_mpg}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            handleClick={() => setIsOpen(true)}
            isDisabled={false}
          />
        </div>
        <CarDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={car}
        />
      </div>
    </div>
  );
};

export default CarCard;
