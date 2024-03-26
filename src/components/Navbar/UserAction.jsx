import Link from "next/link";
import { authUserSession } from "@/libs/user.libs";
import BadgeUser from "./Dropdown/BadgeUser";

const UserAction = async () => {
  const user = await authUserSession();

  return (
    <div className="">
      {user ? (
        <BadgeUser user={user} />
      ) : (
        <Link
          href="/api/auth/signin"
          className="border border-color-dark bg-color-secondary text-color-accent rounded-md px-3 py-2 hover:bg-color-primary hover:text-color-dark transition-all"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default UserAction;
