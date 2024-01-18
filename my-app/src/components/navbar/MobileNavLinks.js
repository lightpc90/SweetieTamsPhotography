"use client";

import Link from "next/link";
import { useState } from "react";
import PortfolioLinks from "./PortfolioLinks";

import { SlArrowDown, SlArrowRight } from "react-icons/sl";

const MobileNavLinks = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="flex flex-col p-5 bg-slate-200 drop-shadow-md">
      <Link href="/">Home</Link>
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <div className="flex gap-1 items-center">
          <p className="">Portfolio</p>
          <span className="text-sm">{isOpened ? <SlArrowDown /> : <SlArrowRight />}</span>
        </div>
      </div>
      {isOpened && (
        <div>
          <PortfolioLinks />
        </div>
      )}
      <Link href="/">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default MobileNavLinks;
