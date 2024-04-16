import { GetAnime } from "@/libs/api-libs";
import Video from "@/components/Video";
import Image from "next/image";
import React from "react";
import BodyCard from "@/components/ListAnime/BodyCard";
import { authUserSession } from "@/libs/user.libs";
// import InputComment from "@/components/ListAnime/InputComment";
// import BoxComment from "@/components/ListAnime/BoxComment";

const Page = async ({ params }) => {
  const { id } = params;
  const anime = await GetAnime(`anime/${id}`);
  const user = await authUserSession();

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
            height={250}
            width={250}
            className="object-cover w-full rounded"
          />
          <BodyCard
            anime={anime}
            mal_id={id}
            user_email={user?.email}
            image={anime.data.images.webp.image_url}
            title={anime.data.title}
          />
        </div>
        <div>
          <Video videoId={anime.data.trailer.youtube_id} />
        </div>
        {/* <div className="px-4 py-2">
          {user && (
            <InputComment
              mal_id={id}
              user_email={user?.email}
              user_name={user?.name}
              title={anime.data.title}
            />
          )}
          <h1 className="text-lg mt-5">Comment</h1>
          <BoxComment mal_id={id} />
        </div> */}
      </div>
    </>
  );
};

export default Page;
