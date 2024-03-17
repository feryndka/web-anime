import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent px-10">
      <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:items-center">
        <Link href={"/"} className="font-bold text-xl">
          ANIME INDONESIA 🚀
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
