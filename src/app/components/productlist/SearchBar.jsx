"use client"
import React, {useState} from "react";

export const SearchBar = (products, {setResults}) => {
const input = {input, setInput} = useState("");

const fetchData = (value) => {
  fetch("https://jsonplaceholder.typeicode.com/users").then((response)=> response.json()).then((json)=>{
 const results =json.filter((user)=>{
  return user && user.name && user.name.toLowerCase().includes(value)
 });
 setResults(results);
  });

  const handleChange = (value)=> {
  setInput(value);
  fetchData(value);
  }

  console.log("burde være id: ", products ," input value : ", input.value," tester: " )

 
  return (
    <form>
      <input value={input} placeholder="Type to search..." onChange={(e)=> handleChange(e.target.value)}></input>
    </form>
  );
};
}
export default SearchBar;
