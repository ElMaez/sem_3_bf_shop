import Image from "next/image";
import Card from "@/app/components/productlist/Card";
import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";
import { getProductId } from "@/app/lib/api";

export default async function Product({ params }) {
  const { id } = await params;
  const item = await getProductId(id);
  console.log("productView page.jsx :", "product: ", item, "id: ", id);
  return (
    <main>
      <h1>{item.id} Her er et product</h1>
      <Button />
      {/* Der skal vises product af id fået fra productlist */}
      <Gallery />
      <Reviews />
    </main>
  );
}
