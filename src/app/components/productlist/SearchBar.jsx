"use client"

import Button from "../other/Button";


const SearchBar = () => {


  return <form >
    <input  type="text" name="q" className="border-2 border-amber-400 w-3xs mr-4" placeholder="Search here ..." ></input>
    <Button type="submit" link="" text="Search" isFilled={true} icon="" style=""  /> 
  </form>;
};

export default SearchBar;
