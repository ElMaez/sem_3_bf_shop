// Everything Api so we can just call info from one place.
export async function getProducts() {
  const data = await fetch(process.env.PRODUCTS_URL);
  const products = await data.json();
  console.log("products: ", products);

  return products.products;
}
