"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { RiFileSearchLine } from "react-icons/ri";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 flex-col">
        <RiFileSearchLine size={46} className="text-color-accent" />
        <h3 className="text-color-accent text-4xl font-bold">PAGE NOT FOUND</h3>
        <button
          onClick={() => router.back()}
          className="text-xl font-semibold text-color-primary hover:text-color-accent underline"
        >
          kembali
        </button>
      </div>
    </div>
  );
};

export default NotFound;
