import { authUserSession } from "@/libs/user.libs";
import Image from "next/image";
import Link from "next/link";

const Dashboard = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex items-center justify-center flex-col gap-5">
      <p className="text-xl">{user?.name}</p>
      <Image
        src={user?.image}
        alt="profile"
        height={250}
        width={250}
        className=""
      />
      <div className="flex gap-5">
        <Link
          href="/users/dashboard/collection"
          className="transition-all p-4 bg-color-accent text-color-secondary hover:bg-color-secondary hover:text-color-accent"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="transition-all p-4 bg-color-accent text-color-secondary hover:bg-color-secondary hover:text-color-accent"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
