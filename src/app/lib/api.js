// Everything Api so we can just call info from one place.
export async function getProducts() {
  const data = await fetch(process.env.PRODUCTS_URL);
  const products = await data.json();
  console.log("api.js :", products);
  return products.products;
}

export async function getProductId(id) {
  const data = await fetch(process.env.PRODUCTS_URL + `/${id}`);
  const product = await data.json();
  console.log("api.js :", product);
  return product.product;
}
