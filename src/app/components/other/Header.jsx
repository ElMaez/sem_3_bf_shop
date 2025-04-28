"use client";
import Link from "next/link";
import "@/app/globals.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/img/logo.png";
import useCartStore from "@/app/stores/increaseAmount";

const Header = () => {
  const pathname = usePathname();
  const { toggleCart } = useCartStore();
  return (
    <header className="flex  items-center p-4  w-full gap-4">
      <div>
        <Link href="/">
          <Image src={Logo} width={250} height={80} alt="logo" />
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
      </div>
    </header>
  );
};

export default Header;
