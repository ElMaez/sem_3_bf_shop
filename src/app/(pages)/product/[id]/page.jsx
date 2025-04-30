"use client";
import Image from "next/image";

import Gallery from "@/app/components/product/Gallery";
import Reviews from "@/app/components/product/Reviews";
import Button from "@/app/components/other/Button";
import useCartStore from "@/app/stores/increaseAmount";

import { getItemId } from "@/app/lib/api";
import Basket from "@/app/components/other/Basket";
import { use, useEffect, useState } from "react";

export default function Home({ params }) {
  const { id } = use(params);
  const [item, setItem] = useState(null);
  const addItemToBasket = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchItem = async () => {
      const fetchedItem = await getItemId(id);
      setItem(fetchedItem);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  //Beregner ny og gammel pris på produkterne
  const discountPercentageDecimal = item.discountPercentage / 100;
  const newPrice = Math.floor(item.price * (1 - discountPercentageDecimal));
  const oldPrice = Math.floor(item.price);

  const handleAddToCart = () => {
    addItemToBasket(item);
  };

  return (
    <main className="mx-auto py-8">
      <Basket />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <Gallery {...item} />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-3xl font-bold mb-2 mt-12">{item.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl text-gray-700">{newPrice} $</h2>
              {item.discountPercentage > 0 && (
                <span className="text-[#8F8A85] line-through">
                  {oldPrice} $
                </span>
              )}
            </div>
            <p className="text-[#747478] mb-2">{item.description}</p>
            {item.stock <= 5 && item.stock > 0 && (
              <span className="inline-block bg-red-200 text-red-600 p-1  text-sm font-semibold mb-4">
                Low stock
              </span>
            )}
            {item.stock === 0 && (
              <span className="inline-block bg-red-300 text-red-600 p-1  text-sm font-semibold mb-4">
                Out of stock
              </span>
            )}
          </div>
          <div className="mb-24 flex gap-2">
            <Button
              link="/payment"
              text="Payment"
              isFilled={false}
              isStroke={true}
              style="hover:shadow-lg"
            />
            <Button
              text="Add To Cart"
              isFilled={true}
              isStroke={false}
              onClick={handleAddToCart}
              style="hover:shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-14 ml-4">
        <Reviews reviews={item.reviews} />
      </div>
    </main>
  );
}
