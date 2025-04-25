import Image from "next/image";

import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";

import { getItemId } from "@/app/lib/api";

export default async function Home({ params }) {
  const { id } = await params;
  const item = await getItemId(id);

  return (
    <main>
      <Gallery {...item} />
      <ul>
        <li>
          <h1>{item.title}</h1>
        </li>
        <li>
          <h2>{item.price}</h2>
        </li>
        <li>
          <p>{id}</p>
        </li>
        <li>
          <p>{item.description}</p>
        </li>
      </ul>

      <Button {...item} />
      {/* Der skal vises product af id fået fra productlist */}

      <Reviews {...item} />
    </main>
  );
}
