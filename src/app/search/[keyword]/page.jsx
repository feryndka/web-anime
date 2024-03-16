import ListAnime from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import React from "react";

const Search = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header
          title={`Search ${keyword}...`}
        />
        <ListAnime api={searchAnime} />
      </section>
    </>
  );
};

export default Search;
