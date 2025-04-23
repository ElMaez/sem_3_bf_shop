import Image from "next/image";
import Card from "@/app/components/productlist/Card";
import Filter from "@/app/components/productlist/Filter";
import SearchBar from "@/app/components/productlist/SearchBar";

import { getProducts } from "@/app/lib/api";

export default async function Productlist() {
  const products = await getProducts();
  console.log("Card compponont: ", products);

  return (
    <main>
      <h1>Productlist</h1>
      <Filter />
      <SearchBar />

      {/* mapping af products med return af Card */}

      {products.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </main>
  );
}
