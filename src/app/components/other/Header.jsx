"use client";
import Link from "next/link";
import "@/app/globals.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/img/logo.png";
import useCartStore from "@/app/stores/increaseAmount";
import Button from "./Button";

const Header = () => {
  const totalItems = useCartStore((state) => state.GetTotalItems());
  const pathname = usePathname();
  const { toggleCart, isCartOpen } = useCartStore();
  return (
    <header className="flex  items-center p-4  w-full gap-4 justify-between">
      <div>
        <Link href="/">
          <Image
            priority={true}
            src={Logo}
            style={{ width: "500px", height: "auto" }}
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
      <div className=" relative">
        <Button
          text=""
          isFilled={false}
          isStroke={false}
          icon={<MdOutlineShoppingBag size={36} />}
          onClick={toggleCart}
          style="headerbasket cursor-pointer"
        />
        <span
          className="font-bold absolute top-0 right-1 translate-x-1/2 translate-y-1/2
            text-zinc-700 text-[1rem]"
        >
          {totalItems}
        </span>
      </div>
      {/* {pathname === "/payment" && <Basket />} */}
    </header>
  );
};

export default Header;
