
import Image from "next/image";
import ProductListClient from "@/app/components/productlist/ProductListClient";
import { getCategories, getSearch } from "@/app/lib/api";

export default async function Productlist() {
  const products = await getSearch();
  const categories = await getCategories();



  const categoriesWithProducts = categories.filter((category) => {
    return products.some((product) => product.category === category);
  });


  return (
    <main>
      <h1 className="text-2xl">Products</h1>

      <ProductListClient
        categories={categoriesWithProducts}
      />
    </main>
  );
}
