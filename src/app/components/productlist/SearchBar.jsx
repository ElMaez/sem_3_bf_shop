"use client"


import Button from "../other/Button";
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const input = document.querySelector("input");


  function noget() {
    console.log("Hello World")
  }

  useEffect(() => {
    const url = `UseEffect: ${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
  
  return <form onSubmit={noget()}>
    <input  type="text" name="searchbar" className="border-2 border-amber-400 w-3xs mr-4" placeholder="Search here ..." ></input>
    <Button type="submit" link="" text="Search" isFilled={true} icon="" style=""  /> 
  </form>;
};

export default SearchBar;
