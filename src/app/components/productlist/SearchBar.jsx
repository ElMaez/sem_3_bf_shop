"use client"
import { getSearch } from "@/app/lib/api";
import useSearchStore from "@/app/stores/searchStore";

export default function SearchBar() {
const searchZus = useSearchStore((state) => state = "noget text")

 
  return (
    <form >
      <input placeholder="Type to search..." ></input>
      <button onClick={searchZus} type="button">Search</button>
{
  function BearCounter() {
    const bears = useStore((state) => state.bears)
    return <h1>{bears} bears around here...</h1>
  }
  
  function Controls() {
    const increasePopulation = useStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
  }
}
      
    </form>
  );
};

// const [searchInput, setSearchInput] = useState("");
// const [searchData, updateSearchData] = useState([]);

// useEffect(() => {
//   const products = getSearch(searchInput).then((res) => res.json());
//   console.log("her er products loggen: ", products);
//   updateSearchData(products);
// }, [searchInput]);

// const handleSearch = (e) => {
//   e.preventDefault();
//   const newInput = e.target[0].value;
//   setSearchInput(newInput);
// };
// console.log("her burde være SearchData: ", searchData);