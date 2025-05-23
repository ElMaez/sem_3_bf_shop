// @flow strict
"use client";
import { useEffect, useRef, useState } from "react";

function Popover({ children, content, trigger = "click" }) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex"
    >
      <div onClick={() => setShow(!show)}>{children}</div>
      <div
        hidden={!show}
        className=" absolute bottom-[120%] z-50 transition-all bg-amber-500 "
      >
        <div className="rounded-xs w-[300px] h-32 bg-white shadow-[10px_30px_150px_rgba(46,38,92,0.25)] p-[1rem] grid">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Popover;
