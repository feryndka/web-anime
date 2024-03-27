import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/user.libs";
import Link from "next/link";
import Image from "next/image";

const Collection = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="w-full px-10">
      <Header title={"Collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collection.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${item.mal_id}`}
              className="border-2 border-color-primary relative shadow-md hover:shadow-color-accent"
            >
              <Image
                src={item.image}
                alt={item.image}
                height={350}
                width={350}
                className="w-full h-full"
              />
              <div className="absolute bottom-0 w-full flex items-center justify-center text-xl h-16 bg-color-primary text-color-dark">
                <h5 className="text-center">{item.title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
