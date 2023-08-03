"use client";
import React, { FC, useState } from "react";
import SearchManufacturers from "./SearchManufacturers";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OtherClassInterface {
  otherClasses: string;
}
const SearchButton: FC<OtherClassInterface> = ({ otherClasses }) => {
  return (
    <button className={`ml-3 z-10 ${otherClasses}`} type="submit">
      <Image
        src={"/magnifying-glass.svg"}
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "")
      return alert("Please fill search-bar");

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searcParams = new URLSearchParams(window.location.search);
    if (model) {
      searcParams.append("model", model);
    } else {
      searcParams.delete("model");
    }
    if (manufacturer) {
      searcParams.append("manufacturer", manufacturer);
    } else {
      searcParams.delete("manufacturer");
    }

    const newPathName = `${window.location.pathname}?${searcParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturers
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="model"
        />
        <input
          className="searchbar__input"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tygun"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
