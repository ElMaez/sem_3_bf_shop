import Image from "next/image";

import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";

import { getItemId } from "@/app/lib/api";

export default async function Home({params}) {
  const { id } = await params;
  const item = await getItemId(id);

  console.log("id single page: ","item: ",item,"id: ",id )
  return (
    <main>
      <h1>{id}</h1>
      <Button {...item} />
      {/* Der skal vises product af id fået fra productlist */}
      <Gallery {...item} />
      <Reviews {...item} />
    </main>
  );
}
