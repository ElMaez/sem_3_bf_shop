import { getProducts } from "@/app/lib/api";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
// Global
export default async function Basket() {
  const products = await getProducts();
  // const { increaseItem } = useStore();

  return (
    <div className="grid gap-4 ">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="grid grid-cols-3 grid-rows-2 bg-amber-700  p-4"
          >
            <div className="grid row-span-3 border-2 mx-4">
              <Image width={60} height={60} />
            </div>
            <section className="flex flex-col gap-3.5">
              <div>
                <h1>{item.title}</h1>
              </div>
              <div className="flex gap-4 col-start-2">
                <p className="">{item.price}</p>
                <p className=" bg-yellow-300 h-fit text-black">
                  {item.discountPercentage}%
                </p>
              </div>
            </section>
            <section className="border-2 border-amber-300 grid col-start-3 items-center">
              <div className="flex items-center gap-4 border-2 ">
                <div className="w-8 border-2 flex justify-center p-1">
                  <p>12</p>
                </div>
                <div className="flex gap-2">
                  <FaPlus />
                  <FaMinus />
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
