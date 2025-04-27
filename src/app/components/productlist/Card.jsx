"use client";
import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import Product from "@/app/productView/[id]/page";
import useCartStore from "@/app/stores/increaseAmount";
const Card = (item) => {
  console.log("Card wallah:", item.id);
  console.log("images fuckhoved: ", item.images[0]);
  const discountPercentage = `${item.discountPercentage / 100}`;
  const newPrice = Math.floor(`${item.price * (1 - discountPercentage)}`);
  const price = Math.floor(`${item.price}`);

  // henter addItem() fra Zustand store
  const addItemToBasket = useCartStore((state) => state.addItem);

  //eventhandler for for kurve-ikonet
  const handleAddToBasket = (event) => {
    event.stopPropagation();
    addItemToBasket(item); //HUSK at ADD to Zustand Store.
  };

  console.log(
    `"DISCOUNT I DECIMAL: ",
    ${newPrice} , "PROCENTEN ER", ${item.discountPercentage} "DEN GAME PRIS ER: "${price}`
  );

  return (
    <section className="border-2 relative grid">
      <Link
        href={`/product/${item.id}`}
        className="after:content-[' ']  after:inset-0 hover:cursor-pointer block "
      >
        <figure className="w-3xs">
          <Image
            src={item.images[0]}
            width={240}
            height={140}
            alt={item.title}
          />
        </figure>
        <section className="p-4">
          <span className="absolute bg-amber-300 font-bold z-10 top-0.5 left-0.5 text-black p-[0.2rem]">
            {item.discountPercentage}%
          </span>
          <span className="absolute bg-red-600 font-bold bottom-28 right-2 p-[0.2rem] ">
            on stock: {item.stock}
          </span>
          <h1 className="text-[1rem]">{item.title}</h1>
          <div className="flex flex-col">
            <span className="mt-2">{newPrice}$</span>
            <span className="font-bold text-gray-400 flex gap-1">
              <p>Old price:</p> <p className="line-through">{price}$</p>
            </span>
          </div>
        </section>
      </Link>
      <div className="flex gap-2 items-center justify-between p-4">
        <div className="flex gap-2 items-center">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span className="text-[0.8rem] text-gray-300">{item.rating}</span>
        </div>
        <button
          onClick={handleAddToBasket}
          className="border-2 hover:text-red-600"
        >
          <MdOutlineShoppingBag size={24} className="hover:text-red-600" />
        </button>
      </div>
    </section>
  );
};

export default Card;
