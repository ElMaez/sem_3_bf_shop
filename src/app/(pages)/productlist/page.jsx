
import Image from "next/image";
import ProductListClient from "@/app/components/productlist/ProductListClient";
import { Suspense } from 'react'
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
      <Suspense fallback={<p>loading ...</p>}>
      <ProductListClient
        categories={categoriesWithProducts}
      />
          </Suspense>
    </main>
  );
}
