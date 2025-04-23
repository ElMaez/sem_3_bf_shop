// Everything Api so we can just call info from one place.
export async function getProducts() {
  const data = await fetch("https://dummyjson.com/products");
  //   "https://dummyjson.com/products"  --- Denne virker
  // process.env.PRODUCTS_URL -- virker IKKE
  const products = await data.json();
  console.log("api.js :", products);
  return products.products;
}
