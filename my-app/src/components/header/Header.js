import React from "react";
import HeaderCTA from "./headerCTA";
import HeaderImage from "./headerImage";

const Header = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center w-full z-30">
        <div className="w-full md:w-6/12"><HeaderCTA/></div>
        <div className="w-full md:w-6/12"><HeaderImage/></div>
      </div>
    </div>
  );
};

export default Header;
