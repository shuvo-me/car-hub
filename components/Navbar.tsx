import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link className="flex justify-center items-center" href={"/"}>
          <Image
            alt="carhub logo"
            src="/logo.svg"
            className="object-contain"
            width={118}
            height={48}
          />
        </Link>
        <CustomButton
          btnType="button"
          title="Sing In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
