"use client";
import Link from "next/link";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import useCartStore from "@/app/stores/increaseAmount";

const Card = (item) => {
  const discountPercentageDecimal = item.discountPercentage / 100;
  const newPrice = Math.floor(item.price * (1 - discountPercentageDecimal));
  const oldPrice = Math.floor(item.price);

  const addItemToBasket = useCartStore((state) => state.addItem);

  const handleAddToBasket = (event) => {
    event.stopPropagation();
    addItemToBasket(item);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={`full-${i}`} className="text-[#A49C96]" />);
      } else {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-[#A49C96]" />);
      }
    }
    return <span className="flex items-center">{stars}</span>;
  };

  return (
    <section className="border-2 border-[#F9F6F2] relative grid shadow-md">
      <Link
        href={`/product/${item.id}`}
        className="after:content-[' ']   after:inset-0 hover:cursor-pointer block "
      >
        <figure
          className="w-3xs relative overflow-hidden flex has-[img]:justify-self-center "
          style={{ aspectRatio: "1 / 1" }}
        >
          {item.images?.[0] && (
            <Image
              src={item.images[0]}
              alt={item.title}
              fill
              style={{ objectFit: "contain" }}
              sizes="100%"
            />
          )}
        </figure>
        <section className="p-4">
          <span className="absolute bg-amber-300 font-medium z-10 top-0.5 left-0.5 text-black p-[0.2rem] shadow-sm">
            {item.discountPercentage}%
          </span>
          {item.stock <= 5 && item.stock > 0 && (
            <span className="absolute bg-red-200 bottom-28 right-2 p-[0.2rem] text-red-600 font-semibold">
              Low stock
            </span>
          )}
          {item.stock === 0 && (
            <span className="absolute bg-red-200 bottom-28 right-2 p-[0.2rem] text-red-600 font-semibold">
              Out of stock
            </span>
          )}
          <h1 className="text-[1rem]">{item.title}</h1>
          <div className="flex items-center gap-2">
            <span>{newPrice}$</span>
            {item.discountPercentage > 0 && (
              <span className=" text-[#8F8A85] line-through">{oldPrice}$</span>
            )}
          </div>
        </section>
      </Link>
      <div className="flex gap-2 items-center justify-between p-4">
        <div className="flex gap-2 items-center">
          {renderStars(item.rating)}
          {item.reviews && (
            <span className="text-sm text-[#8F8A85]">
              ({item.reviews.length})
            </span>
          )}
        </div>
        <button onClick={handleAddToBasket} className=" hover:text-[#8F8A85]">
          <MdOutlineShoppingBag size={24} className="hover:text-[#8F8A85]" />
        </button>
      </div>
    </section>
  );
};

export default Card;
