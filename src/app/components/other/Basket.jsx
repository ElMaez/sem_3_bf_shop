"use client";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
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
    return <p>Din indkøbskurv er tom.</p>;
  }

  return (
    <div className="p-4 border-2 border-red-600 grid grid-rows-[auto 1fr 1fr] bg-gray-300  text-black z-20 absolute">
      <h2 className="text-xl font-bold mb-4">ShoppingCart</h2>
      <ul className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex item-center py-2 border-b  gap-4 flex-col"
          >
            <div className="flex justify-end">
              <button
                onClick={() => removeItem(item.id)}
                className="hover:bg-gray-400 cursor-pointer"
              >
                <FaXmark size={24} />
              </button>
            </div>
            <div className="flex flex-row">
              <div className="relative w-16 h-16 mr-4">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <span className="mr-4 flex items-center">{item.title}</span>
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
            </div>
            <span className="flex">
              <p className="font-bold text-2xl">{item.price}$</p>
            </span>
            <span> Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold">Total: {totalPrice}$</div>
      <Link
        href={"/payment"}
        className="bg-black text-white font-bold py-2 px-8 rounded-[0.5rem] w-fit"
      >
        go to payment
      </Link>
    </div>
  );
}
