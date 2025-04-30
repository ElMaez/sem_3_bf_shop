"use client";
import Link from "next/link";

const Button = ({ link, type, text, icon, onClick, isFilled, isStroke, style  }) => {
let filled = isFilled ? `bg-(--ButtonBgColor) text(--ButtonText)` : ``;
let stroke = isStroke ? `border-2 border-(--ButtonBgColor) text(--ButtonText)` : ``;

  if (link) {
    return (
      <Link href={link} className="inline-block">
        <button className= {`${style} ${filled} ${stroke} p-2 rounded-xs`}>
          {text} {icon}
        </button>
      </Link>
    );
  } else if (icon == true) {
    <button type={type} className={`${style} ${filled} ${stroke} rounded-xs`} onClick={onClick}>
        {text} {icon}
      </button>
  } else {
    return (
    <button type={type} className={`${style} ${filled} ${stroke} p-2 rounded-xs`} onClick={onClick}>
        {text} {icon}
      </button>
    );
  }
};

export default Button;

//<Button link="" text="Button2" isFilled={true} isStroke={true} icon="" onClick="" style="" />  