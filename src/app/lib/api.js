// Everything Api so we can just call info from one place.
export async function getProducts() {
  const data = await fetch(process.env.PRODUCTS_URL);
  const products = await data.json();
  console.log("api.js :", products);
  return products.products;
}

export async function getItemId(id) {
  const Itemdata = await fetch(process.env.PRODUCTS_URL + `/${id}`);
  const item = await Itemdata.json();
  console.log("api.js :", item);
  return item.item;
}
