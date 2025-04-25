import Image from "next/image";
import Button from "./components/other/Button";

export default function Home() {
  return (
    <main>
      <h1>Main</h1>
      <Button link="/productlist" text="Go to products" />
    </main>
  );
}
