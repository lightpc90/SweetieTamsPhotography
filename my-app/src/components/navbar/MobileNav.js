"use client";

import MobileNavLinks from "./MobileNavLinks";

import { useAppContext } from "@/context/AppStates";

const MobileNav = () => {
  const {isNavOpened, setIsNavOpened} = useAppContext()
  return (
    <div>
      <div
        onClick={() => {
          setIsNavOpened(!isNavOpened);
        }}
        className="bg-[#5A6D66] h-16 drop-shadow-lg flex flex-col justify-center items-center text-white font-bold hover:cursor-pointer"
      >
        Menu
      </div>
      {isNavOpened && (
        <div>
          <MobileNavLinks />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
