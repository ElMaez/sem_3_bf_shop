import Link from "next/link";

const Card = (item) => {
  console.log("Card:",item.id)
  return (
    <Link href={`/product/${item.id}`}>
      <h1>{item.title}</h1>
    </Link>
  );
};

export default Card;
