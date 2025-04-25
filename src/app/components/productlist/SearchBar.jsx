"use client"
import React, {useState} from "react";

const SearchBar = (products) => {
const input = {input, setInput} = useState("");

const fetchData = (value) => {
  fetch("https://jsonplaceholder.typeicode.com/users").then((response)=> response.json()).then((json)=>{
  console.log(json);

  });

  const handleChange = (value)=> {
  setInput(value);
  fetchData(value);
  }

  console.log("burde være id: ", products ," input value : ", input.value," tester: " )

 
  return (
    <form>
      <input value={input} placeholder="Type to search..." onChange={(e)=> setInput(e.target.value)}></input>
    </form>
  );
};
}
export default SearchBar;
