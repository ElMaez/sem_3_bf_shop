"use client";
import { getProducts } from "@/app/lib/api";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
//import states and Store
import useCartStore from "@/app/stores/increaseAmount";

// Global
export default function Basket() {
  // const products = await getProducts();
  const cartItems = useCartStore((state) => state.items);
  const incrementQuantity = useCartStore(
    (state) => state.incrementItemQuantity
  );
  const decrementQuantity = useCartStore(
    (state) => state.decrementItemQuantity
  );

  if (cartItems.length === 0) {
    return <p>The shoppingCart is empty</p>;
  }

  return (
    <div className="grid gap-4 ">
      {products.map((item) => {
        const cartItem = cartItems.find((Item) => cartItem.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
      })}
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="grid grid-cols-3 grid-rows-2 bg-amber-700  p-4"
          >
            <div className="grid row-span-3 border-2 mx-4">
              <Image
                width={60}
                height={60}
                alt={item.title}
                src={item.thumbnail}
              />
            </div>
            <section className="flex flex-col gap-3.5">
              <div>
                <h1>{item.title}</h1>
              </div>
              <div className="flex gap-4 col-start-2">
                <p className="">{item.price}</p>
                <p className=" bg-yellow-300 h-fit text-black">
                  {item.discountPercentage}%
                </p>
              </div>
            </section>
            <section className="border-2 border-amber-300 grid col-start-3 items-center">
              <div className="flex items-center gap-4 border-2 ">
                <div className="w-8 border-2 flex justify-center p-1">
                  <p>{quantity}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => incrementQuantity(item.id)}>
                    <FaPlus />
                  </button>
                  <button onClick={() => decrementQuantity(item.id)}>
                    <FaMinus />
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
