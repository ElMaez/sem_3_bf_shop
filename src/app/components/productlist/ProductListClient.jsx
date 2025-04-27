"use client";
import { useState } from "react";
import Filter from "./Filter";
import Card from "./Card";
import SearchBar from "./SearchBar";
import BasketServerSide from "../other/BasketServerSide";
import Basket from "../other/Basket";

const ProductListClient = ({ categories, products }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category)
        );
  //logikken for basket
  // const addToBasket = //fortsæt her.

  return (
    <section>
      <h2>Filter kategorier:</h2>
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
      <div>
        <Basket />
      </div>
      <h2>Produkter:</h2>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductListClient;
