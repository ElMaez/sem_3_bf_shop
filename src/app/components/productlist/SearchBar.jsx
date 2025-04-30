"use client";

import Button from "../other/Button";

const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        name="q"
        className="border-2 border-[#e1dbd6] w-3xs mr-4 p-1"
        placeholder="Search here ..."
      ></input>
      <Button
        type="submit"
        text="Search"
        isFilled={true}
        style="cursor-pointer"
      />
    </form>
  );
};

export default SearchBar;
