"use client";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

//import states and Store
import useCartStore from "@/app/stores/increaseAmount";
import Button from "./Button";

// Global
export default function Basket() {
  //Zustand useStates

  const cartItems = useCartStore((state) => state.items);
  const incrementQuantity = useCartStore(
    (state) => state.incrementItemQuantity
  );
  const decrementQuantity = useCartStore(
    (state) => state.decrementItemQuantity
  );

  const removeItem = useCartStore((state) => state.removeItem);
  // const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const isCartOpen = useCartStore((state) => state.isCartOpen);
  if (!isCartOpen) {
    return null;
  }
  if (cartItems.length === 0) {
    return <p className="font-bold">Your bag is empty.</p>;
  }

  return (
    <div
      style={{
        positionAnchor: "--basket",
        inset: "auto 0 auto auto",
        right: "2rem",
        marginTop: "-5rem",
      }}
      className={`
        p-4 border-2 grid grid-rows-[auto 1fr 1fr] bg-gray-300  text-black z-20 absolute `}
    >
      <h2 className="text-xl font-bold mb-4 text-center">Your bag</h2>
      <ul className="flex flex-col gap-4 ">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-[1fr 1fr 1fr] grid-rows-[repeat(3, 1fr)] py-2 border-b   gap-4 "
          >
            <div className=" relative w-32 h-32 mr-4 flex items-stretch    m-auto">
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
      <Link
        href={"/payment"}
        className="bg-black text-white font-bold py-2 px-8 rounded-[0.5rem]  mt-8 text-center"
      >
        go to payment
      </Link>
    </div>
  );
}
