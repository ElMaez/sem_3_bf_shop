import { getProducts } from "@/app/lib/api";
import Basket from "./Basket";
import Product from "@/app/productView/[id]/page";

const BasketServerSide = async () => {
  const products = await getProducts();
  return <Basket data={products} />;
};

export default BasketServerSide;
