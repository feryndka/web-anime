import ListAnime from "@/components/ListAnime";
import Header from "@/components/ListAnime/Header";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await response.json()

  return (
    <>
      <section>
        <Header title={"Paling Popular"} linkHref={"/popular"} linkTitle={"Lihat semua"} />
        <ListAnime api={topAnime} />
      </section>
    </>
  );
}
