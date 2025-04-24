// Everything Api so we can just call info from one place.
export async function getProducts() {
  const data = await fetch(process.env.PRODUCTS_URL, {
    next: {
      revalidate: 3600, // cacher data i én time
    },
  });
  const products = await data.json();
  return products.products;
}

export async function getProductId(id) {
  const dataID = await fetch(process.env.PRODUCTS_URL + `/${id}`, {
    next: {
      revalidate: 3600, // cacher data i én time
    },
  });
  const item = await dataID.json();
  console.log("api.js ID :", item);
  return item;
}
