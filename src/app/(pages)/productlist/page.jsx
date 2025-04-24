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
<<<<<<< HEAD
      <h1>Productlist</h1>
      <h2>Categories:</h2>
      {categories.map((category) => {
        return <Filter key={category} category={category} />;
      })}
=======
      <h1>Dette er Productlist siden</h1>
      <Filter />
>>>>>>> 0d15d9dfd6928d59781643b3a1876e52bd4a56c1
      <SearchBar />

      <h1>Cards :</h1>
      {products.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </main>
  );
}
