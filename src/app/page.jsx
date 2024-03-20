import ListAnime from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import { GetAnime } from "./api/api-libs";

export default async function Home() {
  const topAnime = await GetAnime("top/anime", "limit=10") 

  return (
    <>
      <section>
        <Header title={"Paling Popular"} linkHref={"/popular"} linkTitle={"Lihat semua"} />
        <ListAnime api={topAnime} />
      </section>
    </>
  );
}
