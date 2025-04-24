import { getProducts } from "@/app/lib/api";
import Basket from "./Basket";

export default async function BasketServerSide() {
  const products = await getProducts();
  return <Basket />;
}
