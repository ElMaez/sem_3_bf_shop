"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/other/Button";
import Basket from "@/app/components/other/Basket";
import useCartStore from "@/app/stores/increaseAmount";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
export default function Payment() {
  const cartItems = useCartStore((state) => state.items);
  const incrementQuantity = useCartStore(
    (state) => state.incrementItemQuantity
  );
  const decrementQuantity = useCartStore(
    (state) => state.decrementItemQuantity
  );

  const removeItem = useCartStore((state) => state.removeItem);
  const totalItems = useCartStore((state) => state.GetTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <main className="mt-20">
      <h1 className="text-3xl">Your Basket ({totalItems} item) </h1>
      <div className="max-w">
        <h2 className="text-xl font-bold mb-4 text-center">Your bag</h2>
        <ul className="flex flex-col gap-4 ">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[auto 1fr 1fr] grid-rows-[repeat(3, 1fr)] py-2 border-b   gap-4 "
            >
              <div className=" relative w-32 h-32 mr-4 flex justify-center    ">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className=" flex flex-col  gap-4">
                <span className="mr-4 flex items-center ">{item.title}</span>
                <div className="flex gap-4">
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="cursor-pointer"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="cursor-pointer"
                  >
                    <FaMinus />
                  </button>
                </div>

                <span className="flex">
                  <p className="font-bold ">{item.price}$</p>
                </span>
                <span> Quantity: {item.quantity}</span>
              </div>
              <div className=" justify-end grid col-end-4 row-end-2  w-fit">
                <button
                  onClick={() => removeItem(item.id)}
                  className="hover:bg-gray-400 cursor-pointer"
                >
                  <FaXmark size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 font-bold flex justify-between">
          <p>Total:</p> {totalPrice}$
        </div>
        <button
          href={"/payment"}
          className="bg-black text-white font-bold py-2 px-8 rounded-[0.5rem]  mt-8 text-center"
        >
          Pay
        </button>
      </div>
    </main>
  );
}
