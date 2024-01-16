import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#5A6D66] h-16 drop-shadow-lg flex gap-2 text-white lg:text-xl justify-end items-center px-5">
      <div className="flex justify-center items-center">
        <div>Portfolio</div>
        <div>...</div>
      </div>
      <Link
        href="/contact"
        className="hover:text-[#f59e0b] hover:font-bold hover:text-2xl"
      >
        Contact
      </Link>
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
  );
}

export default Navbar