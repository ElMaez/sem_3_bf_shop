"use client";
import Link from "next/link";

const Card = (item) => {
  return (
    <Link href={`/productView/${item.id}`}>
      <h1>{item.title}</h1>
    </Link>
  );
};

export default Card;
