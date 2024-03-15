import ListAnime from "@/components/ListAnime";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="text-2xl font-semibold">Paling Popular</h1>
        <Link href={"/popular"} className="md:text-xl text-md underline hover:text-blue-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 px-10 py-5">
        {anime.data.map((item) => {
          return (
            <div key={item.mal_id} className="shadow-lg">
              <ListAnime title={item.title} images={item.images.webp.image_url} id={item.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
