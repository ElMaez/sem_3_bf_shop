"use client"
import { getSearch } from "@/app/lib/api";
import { useState, useEffect } from "react";
// import useSearchStore from "@/app/stores/searchStore";

export default function SearchBar() {
// const searchZus = useSearchStore((state) => state = "noget text")

 const [searchInput, setSearchInput] = useState("");
 const [searchData, updateSearchData] = useState([])

async function search() {
  const products = await getSearch(searchInput);

  updateSearchData(products);
}

 useEffect( () => {
  if (searchInput !== "") {
    search();
    console.log("useEffect")
  }
 }, [searchInput])

 const handleSearch = (e) => {
  //  e.preventDefault();
   const newInput = e.target.value;
   setSearchInput(newInput);
   console.log("her er handleSearch:", e.target.value.trim());
 };


  return (
    <form >
      <input onChange={handleSearch} placeholder="Type to search..."/>
      <button type="button">Search</button>
    </form>
  );
};

