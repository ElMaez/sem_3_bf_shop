"use client";
import { useState } from "react";
import Filter from "./Filter";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Basket from "../other/Basket";

// Searchbar
 import { useEffect } from 'react'
 import { usePathname, useSearchParams } from 'next/navigation'
 import { useRouter } from 'next/navigation'

const ProductListClient = ({ categories, products, search}) => {
  //Category Filter
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const searchMatch =
      searchTerm === "" ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

// Search Feature
   const router = useRouter()
   const pathname = usePathname()
   const searchParams = useSearchParams()


   useEffect(() => {
     const url = `UseEffect: ${pathname}?${searchParams}`
     console.log("url: ", url,"search fra api: ", search)

     // You can now use the current URL
     // ...
     search.forEach(searchProduct => {
      console.log("search forEach: ", searchProduct)
      
      // if (searchProduct.includes(url)) {
      //   console.log("WHAT?!")
      // }
     });

   }, [pathname, searchParams])
  
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
        {filteredProducts.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductListClient;
