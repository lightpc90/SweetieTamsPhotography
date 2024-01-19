"use client";

import Link from "next/link";
import { useState } from "react";
import PortfolioLinks from "./PortfolioLinks";


import { SlArrowDown, SlArrowRight } from "react-icons/sl";

const Navbar = () => {
 
  const [isOpened, setIOpened] = useState(false)
  
  return (
    <div className="">
      <div className="bg-[#5A6D66] h-16 drop-shadow-lg flex gap-2 text-white lg:text-xl justify-end items-center px-5">
        <Link
          href="/"
          className="hover:text-[#f59e0b] hover:font-bold hover:text-2xl"
        >
          Home
        </Link>
        <div
          onClick={() => {
            setIOpened(!isOpened);
          }}
          className="flex justify-center items-center hover:font-bold hover:text-[#f59e0b] hover:text-2xl hover:cursor-pointer"
        >
          <div className="flex gap-1 items-center">
            <div>Portfolio</div>
            <div className="text-sm">{isOpened ? <SlArrowDown/>:<SlArrowRight/> }</div>
          </div>
        </div>
        <div
          className="hover:text-[#f59e0b] hover:font-bold hover:text-2xl"
        >
          Chat Me!
        </div>
        <Link
          href="/about"
          className="hover:text-[#f59e0b] hover:font-bold hover:text-2xl"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="hover:text-[#f59e0b] hover:font-bold hover:text-2xl"
        >
          Blog
        </Link>
      </div>
      {isOpened && (
        <div>
          <PortfolioLinks/>
        </div>
      )}
    </div>
  );
};

export default Navbar;
