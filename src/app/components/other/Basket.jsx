"use client";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

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
        right: "3rem",
        marginTop: "-3rem",
        borderColor: "#E1DBD6",
      }}
      className={`
        p-4 border-2 grid grid-rows-[auto 1fr 1fr] bg-white rounded-xs  text-black z-20 absolute`}
    >
      <h2 className="text-md mb-4 text-[#A49C96]">Your basket</h2>
      <ul className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="py-2 border-b-1 border-b-[#E1DBD6] gap-4 flex-col items-start"
          >
            <div className="flex flex-row items-center w-full justify-between">
              <div className="flex flex-row items-center">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <span className="mr-4">{item.title}</span>
                  <div className="flex flex-col items-start mt-2">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="cursor-pointer text-[#747478]"
                      >
                        <FaPlus />
                      </button>
                      <span className="text-[#747478] text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="cursor-pointer text-[#747478]"
                      >
                        <FaMinus />
                      </button>
                    </div>
                    <span className="flex mt-2 text-lg">{item.price}$</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="hover:bg-[#E1DBD6] cursor-pointer"
              >
                <IoCloseOutline size={24} />
              </button>
            </div>
            <span className="text-[#747478] text-sm mt-2"></span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <p>Total:</p>
        <p className="font-semibold text-lg">{totalPrice}$</p>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          link="/payment"
          text="Go to payment"
          isFilled={true}
          isStroke={false}
          style="cursor-pointer hover:shadow-md"
        />
      </div>
    </div>
  );
}
