import React from "react";
import Link from "next/link";

const FooterSiteMap = () => {
  return (
    <div className="bg-[#1A3B2F] min-h-[700px] text-white p-5 flex flex-col justify-between ">
      <div>
        <p className="text-[#5A6D66] text-xl text-center font-bold mb-5">
          Site Map
        </p>
        {/* Navigation Links */}
        <div className="flex flex-col gap-2 md:text-2xl mb-5">
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
        {/* Porfolio Links */}
        <p className="text-[#5A6D66] text-xl font-bold mt-10 mb-2">Portfolio</p>
        <div className="flex flex-col gap-2 md:text-2xl">
          <Link href="/portfolio/portraits">Portraits</Link>
          <Link href="/portfolio/fashions">Fashions</Link>
          <Link href="/portfolio/events">Events</Link>
          <Link href="/portfolio/remotes">Remote</Link>
          <Link href="/training">Training</Link>
        </div>
      </div>

      {/* copyright section */}
      <div className="mt-8 text-center">
        &copy;{new Date().getFullYear()} SWEETIE TAMS PHOTOGRAPHY | Designed and
        Developed by Gideon Abbey
      </div>
    </div>
  );
};

export default FooterSiteMap;
