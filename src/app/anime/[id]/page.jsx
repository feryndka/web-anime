import { GetAnime } from "@/app/api/api-libs";
import Video from "@/components/Video";
import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;
  const anime = await GetAnime(`anime/${id}`);

  const BodyCard = () => {
    return (
      <div className="flex flex-col gap-1">
        {anime.data.broadcast.timezone ? (
          <div className="flex">
            <p className="w-32">Country</p>
            <p>{anime.data.broadcast.timezone}</p>
          </div>
        ) : null}
        <div className="flex">
          <p className="w-32">Duration</p>
          <p>{anime.data.duration}</p>
        </div>
        <div className="flex">
          <p className="w-32">Score</p>
          <p>
            {anime.data.score} / 10 from {anime.data.scored_by} users
          </p>
        </div>
        <div className="flex mt-4">
          <div className="w-10 bg-color-secondary"></div>
          <div className="px-4">
            <h2 className="text-2xl text-color-accent font-bold pb-2">
              Synopsis
            </h2>
            <p className="text-sm">{anime.data.synopsis}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="text-color-primary sm:w-[80%] mx-auto">
        <h1 className="text-3xl p-4">
          {anime.data.title} {anime.data.year ? `- ${anime.data.year}` : null}
        </h1>
        <div className="flex p-4 text-justify gap-4 sm:flex-nowrap flex-wrap">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            height={150}
            width={150}
            className="object-cover w-full rounded"
          />
          <BodyCard />
        </div>
        <div>
          <Video videoId={anime.data.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
};

export default Page;
