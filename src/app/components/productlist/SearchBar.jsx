"use client"

const SearchBar = (products) => {
 const search = function searchBar () {

const input = document.querySelector("#input")
const submit = document.querySelector("#search")

console.log(products)

// if (input.value ==)

console.log(input.value)
 }
  return (
    <form>
      <input id="input" type="search" placeholder="search here"></input>
      <input id="search" type="button" value="Search" onClick={search}></input>
    </form>
  );
};

export default SearchBar;
