import ListAnime from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import React from "react";

const Search = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword) // untuk mengubah spasi dari %20 menjadi spasi
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={`Search ${decodeKeyword} . . .`}
        />
        <ListAnime api={searchAnime} />
      </section>
    </>
  );
};

export default Search;
