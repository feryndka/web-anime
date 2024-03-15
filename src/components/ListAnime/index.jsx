import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListAnime = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image alt="..." src={images} width={350} height={350} className="w-full max-h-72 object-cover" />
      <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
    </Link>
  );
};

export default ListAnime;
