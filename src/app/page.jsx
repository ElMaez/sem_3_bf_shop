import Image from "next/image";
import Button from "./components/other/Button";
import Basket from "./components/other/Basket";
import BasketServerSide from "./components/other/BasketServerSide";
import ProductsPage from "./components/other/BasketServerSide";

export default function Home() {
  return (
    <main>
      <h1>Main</h1>
      <Button />
      <BasketServerSide />
    </main>
  );
}
