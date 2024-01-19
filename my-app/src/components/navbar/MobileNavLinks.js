"use client";

import Link from "next/link";
import { useState } from "react";
import PortfolioLinks from "./PortfolioLinks";
import { useAppContext } from "@/context/AppStates";

import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { whatsappUrl } from "../utility/whatsappChatProps";

const MobileNavLinks = () => {
  const {setIsNavOpened}= useAppContext()
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="flex flex-col p-5 bg-slate-200 drop-shadow-md">
      <Link
        onClick={() => {
          setIsNavOpened(false);
        }}
        href="/"
      >
        Home
      </Link>
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <div className="flex gap-1 items-center">
          <p className="">Portfolio</p>
          <span className="text-sm">
            {isOpened ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
      </div>
      {isOpened && (
        <div>
          <PortfolioLinks />
        </div>
      )}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          setIsNavOpened(false);
        }}
      >
        Chat Me!
      </Link>
      <Link
        onClick={() => {
          setIsNavOpened(false);
        }}
        href="/about"
      >
        About
      </Link>
      <Link
        onClick={() => {
          setIsNavOpened(false);
        }}
        href="/blog"
      >
        Blog
      </Link>
    </div>
  );
};

export default MobileNavLinks;
