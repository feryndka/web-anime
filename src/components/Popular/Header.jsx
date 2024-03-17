import React from "react";

const Header = ({title}) => {
  return (
    <div>
      <div className="p-5">
        <h3 className="text-2xl text-color-primary text-center">{title}</h3>
      </div>
    </div>
  );
};

export default Header;
