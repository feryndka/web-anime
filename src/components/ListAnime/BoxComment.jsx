// import prisma from "@/libs/prisma";

const BoxComment = async ({ mal_id }) => {
  // const comments = await prisma.comment.findMany({ where: { mal_id: mal_id } });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      {/* {comments.map((item, index) => {
        return (
          <div key={index} className="bg-color-primary text-color-dark p-4">
            <p>{item.user_name}</p>
            <p>{item.comment}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default BoxComment;
