import Image from "next/image";

import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";
import { getItemId } from "@/app/lib/api";

export default async function Product({ params }) {
  const { id } = await params;
  const item = await getItemId(id);
  return (
    <main>
      <h1>{item.id} Her er et product</h1>
      <p className="bg-red">hej</p>
      <Button />
      {/* Der skal vises product af id fået fra productlist */}
      <Gallery />
      <Reviews {...item} />
    </main>
  );
}
