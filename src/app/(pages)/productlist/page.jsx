import Image from "next/image";
import Card from "@/app/components/productlist/Card";
import Filter from "@/app/components/productlist/Filter";
import SearchBar from "@/app/components/productlist/SearchBar";

import { getCategories, getProducts } from "@/app/lib/api";

export default async function Productlist() {
  const products = await getProducts();
  const categories = await getCategories();
  console.log("productlist, page ", categories);

  return (
    <main>
      <h1>Productlist</h1>
      <h2>Categories:</h2>
      {categories.map((category) => {
        return <Filter key={category} category={category} />;
      })}
      <SearchBar />

      {/* mapping af products med return af Card */}
      <h1>Cards :</h1>
      {products.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </main>
  );
}
