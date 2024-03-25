import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collection = () => {
  return (
    <section className="w-full px-5">
      <Header title={"Collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="" className="border-2 border-color-accent relative">
          <Image src="" alt="..." height={350} width={350} className="w-full h-full"/>
          <div className="absolute bottom-0 w-full flex items-center justify-center text-xl h-16 bg-color-accent text-color-dark">
            <h5 className="">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Collection;
