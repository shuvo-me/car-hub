"use client";
import { CustomFilterPropsTypes } from "@/types";
import { updateSearchParams } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, Fragment, useState } from "react";

const CustomFilter: FC<CustomFilterPropsTypes> = ({ options, title }) => {
  const [selected, setSelected] = useState(options[0]);
  console.log({ selected });
  const router = useRouter();
  const updateParams = (e: { title: string; value: string }) => {
    console.log({ e });
    const route = updateSearchParams(title, e.value.toLowerCase());
    router.push(route);
  };
  return (
    <div className=" w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          console.log({ e });
          setSelected(e);
          updateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className="block truncate">{selected?.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              alt="up down"
              height={20}
              width={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-200"
            leaveTo="opactiy-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map((option) => (
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-black"
                    }`
                  }
                  value={option}
                  key={option.title}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
