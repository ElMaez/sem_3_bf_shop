import Image from "next/image";
import Card from "@/app/components/productlist/Card";
import Filter from "@/app/components/productlist/Filter";
import SearchBar from "@/app/components/productlist/SearchBar";

export default function Productlist() {
  return (
    <main>
      <h1>Productlist</h1>
      <Filter />
      <SearchBar />

      {/* mapping af products med return af Card */}
      <Card />
    </main>
  );
}
