import { GetAnime } from "@/app/api/api-libs";
import ListAnime from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import React from "react";

const Search = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword); // untuk mengubah spasi dari %20 menjadi spasi
  const searchAnime = await GetAnime("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Search ${decodeKeyword} . . .`} />
        <ListAnime api={searchAnime} />
      </section>
    </>
  );
};

export default Search;
