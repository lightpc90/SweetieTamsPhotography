"use client";

import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        className="bg-[#5A6D66] h-16 drop-shadow-lg flex flex-col justify-center items-center text-white font-bold hover:cursor-pointer"
      >
        Menu
      </div>
      {isOpened && (
        <div>
          <MobileNavLinks />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
