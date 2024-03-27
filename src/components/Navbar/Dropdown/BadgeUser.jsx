"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PiSignOutBold } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";

import "./style.css";

const BadgeUser = ({ user }) => {
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!open);
  };

  return (
    <div className="flex items-center md:justify-center justify-end gap-2 px-2 py-px rounded-lg w-full mt-3 md:mt-0 relative">
      <button
        className="hover:bg-color-primary rounded-full w-11 h-11 flex items-center justify-center transition-all"
        onClick={handleOpen}
      >
        <Image
          src={user.image}
          alt="profile"
          height={250}
          width={250}
          className="rounded-full w-9 h-9"
        />
      </button>
      {open && (
        <>
          <div className="flex flex-col dropDown py-5 px-10 top-20 right-0 md:right-2">
            <div className="flex flex-col items-center justify-center text-lg">
              <Image
                src={user.image}
                alt="profile"
                height={250}
                width={250}
                className="rounded-full w-14 h-14"
              />
              <p className="font-bold">{user.name}</p>
              <p className="text-md">{user.email}</p>
            </div>
            <hr className="my-5 hr" />
            <ul className="flex flex-col gap-3">
              <Link
                href="/users/dashboard"
                onClick={handleOpen}
                className="flex items-center gap-3 text-lg hover:bg-color-accent rounded-lg transition-all font-semibold px-3 py-2"
              >
                <MdSpaceDashboard size={25} />
                Dashboard
              </Link>
              <Link
                href="/api/auth/signout"
                onClick={handleOpen}
                className="flex items-center gap-3 text-lg hover:bg-color-accent rounded-lg transition-all font-semibold px-3 py-2"
              >
                <PiSignOutBold size={25} />
                Sign Out
              </Link>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default BadgeUser;
