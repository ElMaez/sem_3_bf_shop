import Image from "next/image";
import Hero from "./assets/img/Hero.png";
import Button from "@/app/components/other/Button";
import BasketServerSide from "@/app/components/other/BasketServerSide";

export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={Hero}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          style={{ zIndex: -1 }}
        />
      </div>

      <main
        id="hero"
        className="relative z-10 flex flex-col justify-center items-center min-h-full"
      >
        <h1 className="text-6xl mb-8 font-semibold text-white bg-[#0000003b] p-4 rounded-xs">
          All In One Store
        </h1>
        <Button
          link="/productlist"
          text="Go to products"
          isFilled={true}
          isStroke={true}
          style="cursor-pointer"
        />
        <BasketServerSide />
      </main>
    </div>
  );
}
