import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";
import UserSignin from "./UserAction";

const Navbar = () => {
  return (
    <header className="bg-color-accent px-10">
      <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:items-center">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="font-bold text-xl">
            ANIME INDONESIA 🚀
          </Link>
        </div>

        <div className="md:flex items-center gap-4">
          <InputSearch />
          {/* <UserSignin /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
