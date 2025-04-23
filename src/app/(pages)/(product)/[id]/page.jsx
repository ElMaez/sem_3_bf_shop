import Image from "next/image";
import Card from "@/app/components/productlist/Card";
import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";

export default function Product() {
  return (
    <main>
      <h1>Product</h1>
      <Button />
      {/* Der skal vises product af id fået fra productlist */}
      <Gallery />
      <Reviews />
    </main>
  );
}
