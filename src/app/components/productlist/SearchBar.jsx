"use client"
import { getSearch } from "@/app/lib/api";
import React, {useEffect, useState} from "react";

export default function SearchBar() {
const [searchInput, setSearchInput] = useState("");
const [searchData, updateSearchData] = useState([])

 useEffect( () =>{
   const products = getSearch(searchInput).then(res => res.json());
   console.log("her er products loggen: ",products)
   updateSearchData(products)
 },[searchInput]);

const handleSearch = (e) => {
  e.preventDefault()
  const newInput = e.target[0].value
  setSearchInput(newInput)
}
console.log("her burde være SearchData: ", searchData)

 
  return (
    <form onSubmit={handleSearch}>
      <input placeholder="Type to search..." ></input>
      <button type="submit">Search</button>
    </form>
  );
};

