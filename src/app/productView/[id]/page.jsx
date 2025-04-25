import Image from "next/image";
import Card from "@/app/components/productlist/Card";
import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";
import { getItemId } from "@/app/lib/api";

export default async function Product({ params }) {
  const { id } = await params;
  const item = await getItemId(id);
  console.log("Data fra getItemId:", item);
  return (
    <main>
      {/* <Gallery /> */}
      <ul>
        <li>
          <h1>{item.title}</h1>
        </li>
        <li>
          <p>{id} Her er et product</p>
        </li>
        <li>
          <p>{item.description}</p>
        </li>
      </ul>

      {/* Der skal vises product af id fået fra productlist */}

      {/* <Reviews {...item} /> */}
    </main>
  );
}
