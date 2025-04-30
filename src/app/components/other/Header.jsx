"use client";
import Link from "next/link";
import "@/app/globals.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/img/logo.png";
import Basket from "./Basket";
import useCartStore from "@/app/stores/increaseAmount";

const Header = () => {
  // const cartItems = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.GetTotalItems());
  const pathname = usePathname();
  const { toggleCart, isCartOpen } = useCartStore();
  return (
    <header className="flex  items-center p-4  w-full gap-4">
      <div>
        <Link href="/">
          <Image
            src={Logo}
            style={{ width: "100%", height: "auto" }}
            alt="logo"
          />
        </Link>
      </div>
      <nav className=" flex  mr-auto">
        <ul className="flex flex-row gap-8">
          <li>
            <Link
              href="/"
              className={` ${
                pathname === "/"
                  ? "bg-black py-4 px-2 text-white font-bold"
                  : "text-black hover:underline  "
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/productlist"
              className={` ${
                pathname === "/productlist"
                  ? "bg-black py-4 px-2 text-white font-bold"
                  : "text-black hover:underline "
              }`}
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        <button onClick={toggleCart} className=" headerbasket cursor-pointer ">
          <MdOutlineShoppingBag size={36} />
        </button>
        <div
          style={{
            positionAnchor: "--basket",
            inset: "auto, 0, auto, auto",
            right: "1.7rem",

            marginTop: "-2.9rem",
            borderColor: "#E1DBD6",
          }}
          className="font-bold absolute text-zinc-500"
        >
          {totalItems}
        </div>
      </div>
    </header>
  );
};

export default Header;
