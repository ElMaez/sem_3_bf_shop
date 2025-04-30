"use client";

import { useState } from "react";
import Filter from "./Filter";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Basket from "../other/Basket";
import Button from "../other/Button";

// Searchbar
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getSearch } from "@/app/lib/api";

const ProductListClient = ({ categories }) => {
  // Search Feature
  const [products, setProducts] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  let filteredProducts = [];

  useEffect(() => {
    const andet = async () => {
      await getSearch(searchParams.get(`q`)).then((res) => {
        setProducts(res);
      });
    };
    andet();
    router.refresh();
  }, [searchParams]);

  // Category Filter Visibility
  const [showCategories, setShowCategories] = useState(false);

  //Category Filter Logic
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm] = useState("");

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleCategoriesVisibility = () => {
    setShowCategories(!showCategories);
  };

  if (products != null) {
    console.log("products!=null");
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
    <section className="relative">
      <Basket />
      <div className="flex items-center justify-between mb-4">
        <Button
          text="Categories"
          isFilled={true}
          isStroke={false}
          onClick={toggleCategoriesVisibility}
          style="font-light text-xl hover:shadow-lg cursor-pointer"
        ></Button>
        <SearchBar />
      </div>
      {showCategories && (
        <div className="absolute top-[60px] left-0 w-fit bg-white shadow-sm rounded-xs z-30 cursor-pointer">
          <div className="flex flex-col gap-4 p-4">
            {categories.map((category) => (
              <Filter
                key={category}
                category={category}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredProducts.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductListClient;
