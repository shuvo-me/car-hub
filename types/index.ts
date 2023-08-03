import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface carInterface {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CardCardProps {
  car: carInterface;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carInterface;
}
export interface FilterInterface {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionTypes {
  title: string;
  value: string;
}
export interface CustomFilterPropsTypes {
  title: string;
  options: OptionTypes[];
}

export interface ShowMorePropTypes {
  isNext: boolean;
  pageNumber: number;
}

export interface HomePropTypes {
  searchParams: FilterInterface;
}
