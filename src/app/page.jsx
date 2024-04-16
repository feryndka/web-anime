import ListAnime from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";
import { GetAnime, GetNestedAnime, reproduce } from "../libs/api-libs";

export default async function Home() {
  const topAnime = await GetAnime("top/anime", "limit=15");
  let recommenAnime = await GetNestedAnime("recommendations/anime", "entry");
  recommenAnime = reproduce(recommenAnime, 5);

  return (
    <>
      <section>
        <Header
          title={"Paling Popular"}
          linkHref={"/popular"}
          linkTitle={"Lihat semua"}
        />
        <ListAnime api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <ListAnime api={recommenAnime} />
      </section>
    </>
  );
}
