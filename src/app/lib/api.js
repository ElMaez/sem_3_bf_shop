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
  return categories;
}
export async function getItemId(id) {
  const dataID = await fetch(process.env.PRODUCTS_URL + `/${id}`, {
    next: {
      revalidate: 3600, // cacher data i én time
    },
  });
  const item = await dataID.json();
  return item;
}

// Search API
export async function getSearch(input) {
  const dataSearch = await fetch(process.env.SEARCH_URL + `${input}`, {
    next: {
      revalidate: 3600, // cacher data i én time
    },
  });
  const search = await dataSearch.json();
  return search;
}
