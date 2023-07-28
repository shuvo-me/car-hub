"use client";
import { CarDetailsProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { FC, Fragment } from "react";

const CarDetails: FC<CarDetailsProps> = ({ car, closeModal, isOpen }) => {
  return (
    <>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className={"relative z-10"} onClose={closeModal}>
          <Transition.Child
            enter=" ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div className="fixed inset-0 bg-black opacity-40" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center items-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain "
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={"/hero.png"}
                        priority
                        fill
                        className="object-contain"
                        alt="car"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative ronded-lg bg-primary-blue-100 w-full h-24">
                        <Image
                          src={"/hero.png"}
                          priority
                          fill
                          className="object-contain"
                          alt="car"
                        />
                      </div>
                      <div className="flex-1 relative ronded-lg bg-primary-blue-100 w-full h-24">
                        <Image
                          src={"/hero.png"}
                          priority
                          fill
                          className="object-contain"
                          alt="car"
                        />
                      </div>
                      <div className="flex-1 relative ronded-lg bg-primary-blue-100 w-full h-24">
                        <Image
                          src={"/hero.png"}
                          priority
                          fill
                          className="object-contain"
                          alt="car"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
