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

<<<<<<< HEAD
//Category API Fetch
export async function getCategories() {
  const dataCategories = await fetch(
    process.env.PRODUCTS_URL + `/category-list`,
    {
      next: {
        revalidate: 3600, // cacher data i én time
      },
    }
  );
  const categories = await dataCategories.json();
  console.log("kategori-data", categories);
  return categories;
=======
export async function getItemId(id) {
  const dataID = await fetch(process.env.PRODUCTS_URL + `/${id}`, {
    next: {
      revalidate: 3600, // cacher data i én time
    },
  });
  const item = await dataID.json();
  console.log("api.js ID :", item);
  return item;
>>>>>>> 0d15d9dfd6928d59781643b3a1876e52bd4a56c1
}
