import Image from "next/image";

import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";

import { getItemId } from "@/app/lib/api";

export default async function Home({ params }) {
  const { id } = await params;
  const item = await getItemId(id);

  return (
    <main className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <Gallery {...item} />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            <h2 className="text-xl text-gray-700 mb-4">{item.price} $</h2>
            <p className="text-[#747478] mb-6">{item.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Reviews reviews={item.reviews} />
      </div>
    </main>
  );
}
