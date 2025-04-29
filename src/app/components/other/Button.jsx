"use client";
import Link from "next/link";

const Button = ({ link, type, text, icon, onClick, isFilled, isStroke, style  }) => {
let filled = isFilled ? `bg-(--ButtonBgColor) text(--ButtonTextColorLight)` : ``;
let stroke = isStroke ? `border-(--ButtonBgColor) border-2 text(--ButtonTextColorDark)` : ``;

  if (link) {
    return (
      <Link href={link} className="inline-block">
        <button className= {`${style} ${filled} p-2 rounded-sm`}>
          {text} {icon}
        </button>
      </Link>
    );
  } else {
    return (
    <button type={type} className={`${style} ${filled} ${stroke} p-2 rounded-sm`} onClick={onClick}>
        {text} {icon}
      </button>
    );
  }
};

export default Button;

//<Button link="" text="Button2" isFilled={true} isStroke={true} icon="" onClick="" style="" />  