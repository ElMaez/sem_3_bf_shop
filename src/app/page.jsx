
import Button from "./components/other/Button";
import BasketServerSide from "./components/other/BasketServerSide";



export default function Home() {
  return (
    <main>
      <h1>Main</h1>
      <Button link="/productlist" text="Go to products" isFilled={true} icon="" onClick="" style="" />
      <BasketServerSide />
    </main>
  );
}
