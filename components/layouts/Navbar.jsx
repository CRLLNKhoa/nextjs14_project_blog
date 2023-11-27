"use client"
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { GoSun, GoMoon } from "react-icons/go";
import Search from "./Search";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true)
  }, []);

  if(!mount){
    return null
  }

  return (
    <header id="some-element" className="bg-background w-full h-[64px] border-b">
      <div className="container h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl text-inherit no-underline"
        >
          <span>
            <b className="text-blue-500">{`<LN`}</b>
            <b className="">{`Khoa./>`}</b>
          </span>
        </Link>
        <div className="lg:flex gap-4 items-center hidden">
          <Search />
         {theme === "dark" &&  <Button
            onClick={() => setTheme("light")}
            className="bg-neutral-300 group duration-500 rounded-full"
            size="icon"
          >
            <GoSun className="h-5 w-5 text-black group-hover:text-white duration-500" />
          </Button>}
         {theme === "light" &&  <Button
            onClick={() => setTheme("dark")}
            className="bg-neutral-300 group duration-500 rounded-full"
            size="icon"
          >
            <GoMoon className="h-5 w-5 text-black group-hover:text-white duration-500" />
          </Button>}
        </div>
        <div className="lg:hidden gap-4 items-center flex">
         {theme === "dark" &&  <Button
            onClick={() => setTheme("light")}
            className="bg-neutral-300 group duration-500 rounded-full"
            size="icon"
          >
            <GoSun className="h-5 w-5 text-black group-hover:text-white duration-500" />
          </Button>}
         {theme === "light" &&  <Button
            onClick={() => setTheme("dark")}
            className="bg-neutral-300 group duration-500 rounded-full"
            size="icon"
          >
            <GoMoon className="h-5 w-5 text-black group-hover:text-white duration-500" />
          </Button>}
        </div>
      </div>
    </header>
  );
}
