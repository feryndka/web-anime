// import prisma from "@/libs/prisma";
// import ButtonCollection from "./ButtonCollection";

const BodyCard = async ({ anime, mal_id, user_email, image, title }) => {
  // const collection = await prisma.collection.findFirst({
  //   where: { user_email: user_email, mal_id: mal_id },
  // });

  return (
    <div className="flex flex-col gap-1">
      {/* {!collection && user_email && (
        <ButtonCollection
          mal_id={mal_id}
          user_email={user_email}
          image={image}
          title={title}
        />
      )} */}
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

export default BodyCard;
