"use client";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/img/logo.png";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center p-4 justify-between">
      <div>
        <Link href="/">
          <Image src={Logo} width={250} height={80} alt="logo" />
        </Link>
      </div>
      <nav className=" flex">
        <ul className="flex flex-row gap-8">
          <li>
            <Link
              href="/"
              className={` ${
                pathname === "/"
                  ? "bg-white py-4 px-2 text-black font-bold"
                  : "text-white  hover:underline "
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
                  ? "bg-white py-4 px-2 text-black font-bold"
                  : "text-white hover:underline "
              }`}
            >
              Product
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        <MdOutlineShoppingBag size={36} />
      </div>
    </header>
  );
};

export default Header;
