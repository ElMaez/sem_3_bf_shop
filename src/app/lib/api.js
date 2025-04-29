// Everything Api so we can just call info from one place.

//Category API Fetch
export async function getCategories() {
  const dataCategories = await fetch(
    "https://dummyjson.com/products" + `/category-list`,
    {
      next: {
        revalidate: 3600, // cacher data i én time
      },
    }
  );
  const categories = await dataCategories.json();
  return categories;
}
export async function getItemId(id) {
  const dataID = await fetch("https://dummyjson.com/products" + `/${id}`, {
    next: {
      revalidate: 3600, // cacher data i én time
    },
  });
  const item = await dataID.json();
  return item;
}

//SearchParams på Client
export async function getSearch(input) {
  if (input == null) {
    const data = await fetch("https://dummyjson.com/products", {
      next: {
        revalidate: 3600, // cacher data i én time
      },
    });
    const products = await data.json();
    return products.products;
  } else {
    const datasearch = await fetch(
      `https://dummyjson.com/products/search?q=${input}`,
      {
        next: {
          revalidate: 3600, // cacher data i én time
        },
      }
    );
    const products = await datasearch.json();
    return products.products;
  }
}
