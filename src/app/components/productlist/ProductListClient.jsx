"use client";

import { useState } from "react";
import Filter from "./Filter";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Basket from "../other/Basket";

// Searchbar
 import { useEffect } from 'react'
 import { useSearchParams } from 'next/navigation'
 import { useRouter } from 'next/navigation'
import { getSearch } from "@/app/lib/api";

const ProductListClient = ({categories}) => {

// Search Feature
const [products, setProducts] = useState(null)
const router = useRouter()
const searchParams = useSearchParams();
let filteredProducts = [];

 useEffect( () => {
    const andet = async()=> {
    await getSearch(searchParams.get(`q`)).then((res)=>{
      setProducts(res);
    }) 
   }
   andet();
   router.refresh()
 }, [searchParams])


  //Category Filter
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm] = useState("");

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
 if (products!= null ){
  console.log("products!=null")
   filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const searchMatch =
      searchTerm === "" ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });
} 

  return (
    <section>
      <Basket />
      <h2 className="text-xl font-light mb-2">Categories</h2>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Filter
              key={category}
              category={category}
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
          ))}
        </div>
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {" "}
        {
        filteredProducts.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductListClient;
