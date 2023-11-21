import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { GoSun, GoMoon } from "react-icons/go";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-background w-full h-[64px]">
      <div className="container h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl"
        >
          <b className="text-blue-500">{`<LN`}</b>
          <b className="">{`Khoa./>`}</b>
        </Link>
        <div className="flex gap-4 items-center">
          <Search />
          <Button
            className="bg-neutral-300 group duration-500 rounded-full"
            size="icon"
          >
            <GoSun className="h-5 w-5 text-black group-hover:text-white duration-500" />
          </Button>
          <Button
            className="bg-neutral-300 group duration-500 rounded-full"
            size="icon"
          >
            <GoMoon className="h-5 w-5 text-black group-hover:text-white duration-500" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
