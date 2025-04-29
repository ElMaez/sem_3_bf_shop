
import Button from "./components/other/Button";
import BasketServerSide from "./components/other/BasketServerSide";


export default function Home() {
  return (
  <main id="hero">
    {/* <Image
    src={Hero}
    style={{objectFit:"contain"}}
    alt="hero picture"
    ></Image> */}
      <Button link="/productlist" text="Go to products" isFilled={true} isStroke={false} icon="" style="" />
      <BasketServerSide />
      
    </main>
  );
}
