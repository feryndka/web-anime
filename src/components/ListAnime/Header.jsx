import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <h1 className="text-2xl font-semibold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-color-accent transition-all text-color-primary"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
