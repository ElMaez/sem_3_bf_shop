// Everything Api so we can just call info from one place.
export async function getProducts() {
  const data = await fetch(process.env.PRODUCTS_URL);
  const products = await data.json();
  return products.products;
}

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
}
