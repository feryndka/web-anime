import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/user.libs";
import Link from "next/link";

const Comment = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <div className="w-full px-10">
      <Header title={"Comment"} />
      <div className="grid grid-cols-1 gap-4">
        {comments.map((item, index) => {
          return (
            <Link
              href={`/anime/${item.mal_id}`}
              key={index}
              className="bg-color-primary text-color-dark p-4"
            >
              <p>{item.title}</p>
              <p>{item.comment}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
