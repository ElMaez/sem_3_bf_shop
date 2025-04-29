"use client";
import Link from "next/link";
import "@/app/globals.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/img/logo.png";
import useCartStore from "@/app/stores/increaseAmount";
import Basket from "./Basket";

const Header = () => {
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
              Product
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <button onClick={toggleCart} className=" headerbasket cursor-pointer ">
          <MdOutlineShoppingBag size={36} />
        </button>
        {/* {isCartOpen && (
          <Basket
            style={{
              positionAnchor: "--basket",
              inset: "auto 0 auto auto",
              right: "1rem",
              marginTop: "-3rem",
            }}
            className={`
              p-4 border-2 grid grid-rows-[auto 1fr 1fr] bg-gray-300  text-black z-20 absolute`}
          />
        )} */}
      </div>
      {/* {pathname === "/payment" && <Basket />} */}
    </header>
  );
};

export default Header;
