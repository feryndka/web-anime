import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-500">
      <div className="flex flex-col md:flex-row justify-between p-4 gap-3">
        <Link href={"/"} className="font-bold text-xl text-white">ANIMELIST</Link>
        <input type="text" placeholder="Search anime"/>
      </div>
    </header>
  )
};

export default Navbar;
