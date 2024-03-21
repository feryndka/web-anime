import ListAnime from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import { GetAnime, GetNestedAnime } from "./api/api-libs";

export default async function Home() {
  const topAnime = await GetAnime("top/anime", "limit=10") 
  let recommenAnime = await GetNestedAnime("recommendations/anime")
  recommenAnime = {data: recommenAnime.slice(0, 10)}
  
  return (
    <>
      <section>
        <Header title={"Paling Popular"} linkHref={"/popular"} linkTitle={"Lihat semua"} />
        <ListAnime api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <ListAnime api={recommenAnime} />
      </section>
    </>
  );
}
