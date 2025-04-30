"use client";
import Link from "next/link";
import "@/app/globals.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { usePathname } from "next/navigation";
import useCartStore from "@/app/stores/increaseAmount";
import Button from "./Button";

const Header = () => {
  const totalItems = useCartStore((state) => state.GetTotalItems());
  const pathname = usePathname();
  const { toggleCart, isCartOpen } = useCartStore();
  return (
    <header className="flex items-center py-4 w-full justify-between">
      <div>
        <Link href="/">
          <h1 className="text-[#8F8A85] font-bold text-5xl mr-4">
            All In One Store
          </h1>
        </Link>
      </div>
      <nav className="flex m-auto">
        <ul className="flex flex-row gap-20 ">
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
                  ? "bg-(--ButtonBgColor) py-4 px-2 text-black"
                  : "text-black hover:underline "
              }`}
            >
              Shop
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
          style="headerbasket cursor-pointer hover:text-gray-400"
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
