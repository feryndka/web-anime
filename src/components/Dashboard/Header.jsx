'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { RxSlash } from "react-icons/rx";

const Header = ({title}) => {
  const router = useRouter()

  const handleBack = (e) => {
    e.preventDefault()
    router.back()
  }

  return (
    <div className="text-color-primary flex items-center py-4">
      <button className="text-lg" onClick={handleBack}>Dashboard</button>
      <RxSlash size={24} />
      <h1 className="text-lg cursor-pointer">{title}</h1>
    </div>
  );
};

export default Header;
