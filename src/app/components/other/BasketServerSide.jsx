import { getProducts } from "@/app/lib/api";
import Basket from "./Basket";

export async function getServerSideProps() {
  try {
    const fetchData = getProducts();
    console.log("ER i Basket server", fetchData);
    return {
      props: {
        products: data.products || [],
      },
    };
  } catch (error) {
    console.error("Fejl ved hentning af produkter:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

const ProductsPage = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((products) => (
        <Basket key={products.id} products={products} />
      ))}
    </div>
  );
};

export default ProductsPage;

// const products = await getProducts();
// return <Basket />;
