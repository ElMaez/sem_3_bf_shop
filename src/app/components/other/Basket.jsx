"use client";
import { getProducts } from "@/app/lib/api";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
//import states and Store
import useCartStore from "@/app/stores/increaseAmount";

// Global
export default function Basket() {
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

  if (cartItems.length === 0) {
    return <p>Din indkøbskurv er tom.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ShoppingCart</h2>
      <ul>
        {cartItems.map((item) => {
          <li key={item.id} className="flex item-center py-2 border-b">
            <div className="relative w-16 h-16 mr-4">
              <Image
                src={item.thumbnail}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <span className="mr-4">{item.title}</span>
            <div className="flex items-center">
              <button
                onClick={() => incrementQuantity(item.id)}
                className="bg-amber-300"
              >
                <FaPlus />
              </button>
            </div>
            <span className="ml-auto">
              {item.price * item.quantity * tofixed(2)}
            </span>
            <button onClick={() => decrementQuantity(item.id)}>
              <FaMinus />
            </button>
          </li>;
        })}
      </ul>
      <div className="mt-4 font-bold">Total: {totalPrice.tofixed(2)}</div>
    </div>
  );
}
