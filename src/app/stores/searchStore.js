import { create } from "zustand";

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

import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export default useSearchStore;
