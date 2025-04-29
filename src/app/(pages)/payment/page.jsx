"use client";
import Image from "next/image";
import useCartStore from "@/app/stores/increaseAmount";
import { IoCloseOutline } from "react-icons/io5";

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
        <div className="mt-8 font-bold flex justify-between">
          <p>Total:</p> {totalPrice}$
        </div>
        <button
          href={"/payment"}
          className="bg-black text-white font-bold py-2 px-8 rounded-[0.5rem]  mt-8 text-center cursor-pointer hover:bg-gray-400"
        >
          Pay
        </button>
      </div>
    </main>
  );
}
