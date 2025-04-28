import Image from "next/image";
import Card from "@/app/components/productlist/Card";
import Filter from "@/app/components/productlist/Filter";
import SearchBar from "@/app/components/productlist/SearchBar";
import ProductListClient from "@/app/components/productlist/ProductListClient";
import { getCategories, getProducts } from "@/app/lib/api";

export default async function Productlist() {
  const products = await getProducts();
  const categories = await getCategories();

  const categoriesWithProducts = categories.filter((category) => {
    return products.some((product) => product.category === category);
  });
  return (
    <main>
      <h1 className="text-2xl">Products</h1>

      <ProductListClient
        categories={categoriesWithProducts}
        products={products}
      />
    </main>
  );
}
