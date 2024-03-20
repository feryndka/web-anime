import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListAnime = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 px-10">
      {api?.data?.map((item) => (
        <Link
          href={`/anime/${item.mal_id}`}
          className="cursor-pointer text-color-primary hover:text-color-accent transition-all bg-color-secondary shadow-md hover:shadow-color-accent"
          key={item.mal_id}
        >
          <Image
            alt="..."
            src={item.images.webp.image_url}
            width={350}
            height={350}
            className="w-full max-h-72 object-cover"
          />
          <h3 className="font-bold md:text-xl text-md p-4">{item.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ListAnime;
