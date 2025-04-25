"use client";
import Link from "next/link";

const Button = ({ link, text, icon, onClick }) => {
  if (link) {
    return (
      <Link href={link} className="inline-block">
        <button className="border-2 border-black p-2">
          {text} {icon}
        </button>
      </Link>
    );
  } else {
    return (
      <button className="border-2 border-black p-2" onClick={onClick}>
        {text} {icon}
      </button>
    );
  }
};

export default Button;
