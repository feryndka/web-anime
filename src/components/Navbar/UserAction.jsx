import Link from "next/link";
import { authUserSession } from "@/libs/user.libs";
import Image from "next/image";

const UserAction = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  const BadgeUser = () => {
    return (
      <div className="flex items-center justify-center gap-2 px-2 py-px rounded-lg">
        <button className="hover:bg-color-primary rounded-full w-11 h-11 flex items-center justify-center transition-all">
          <Image
            src={user.image}
            alt="profile"
            height={250}
            width={250}
            className="rounded-full w-9 h-9"
          />
        </button>
        <Link href="/users/dashboard">Dashboard</Link>
      </div>
    );
  };

  return (
    <div className="flex gap-4 items-center justify-between">
      {user ? <BadgeUser /> : null}
      <Link
        href={actionURL}
        className="border border-color-dark bg-color-secondary text-color-accent rounded-md px-3 py-2 hover:bg-color-primary hover:text-color-dark transition-all"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAction;
