"use client";
import Link from "next/link";
// Global props:(link, text, icon)

const Button = ({ link, text, icon }) => {
  return (
    <button className="border-2 border-black p-2">
      <Link href={link}>
        {" "}
        {text} {icon}{" "}
      </Link>
    </button>
  );
};

export default Button;
