import { getProducts } from "@/app/lib/api";
import Basket from "./Basket";
import Product from "@/app/productView/[id]/page";

const BasketServerSide = async () => {
  const products = await getProducts();
  console.log("ER i Basket server", products);
  return <Basket data={products} />;
};

export default BasketServerSide;
