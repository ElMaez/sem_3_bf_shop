
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
      <Button link="/productlist" text="Go to products" isFilled={false} isStroke={true} icon="" style="" />
      <BasketServerSide />
      
    </main>
  );
}
