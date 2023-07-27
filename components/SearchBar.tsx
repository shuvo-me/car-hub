"use client";
import React, { useState } from "react";
import SearchManufacturers from "./SearchManufacturers";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturers
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
