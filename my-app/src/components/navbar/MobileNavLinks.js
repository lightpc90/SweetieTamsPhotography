"use client";

import Link from "next/link";
import { useState } from "react";
import PortfolioLinks from "./PortfolioLinks";

const MobileNavLinks = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="flex flex-col p-5 bg-slaet-200 drop-shadow-md">
      <div className="hover:cursor-pointer" onClick={()=>{setIsOpened(!isOpened)}}>Portfolio...</div>
      {isOpened && (
        <div>
          <PortfolioLinks />
        </div>
      )}
      <Link href="/">Contact</Link>
      <Link href="/">About</Link>
      <Link href="/">Blog</Link>
    </div>
  );
};

export default MobileNavLinks;
