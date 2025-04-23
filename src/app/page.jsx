import Image from "next/image";
import Button from "./components/other/Button";
import Basket from "./components/other/Basket";

export default function Home() {
  return (
    <main>
      <h1>Main</h1>
      <Button />
      <Basket />
    </main>
  );
}
