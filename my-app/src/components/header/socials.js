import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { linkedinLink, instagramLink, facebookLink, youtubeLink } from '../utility/socialLinks';

const Socials = () => {
  return (
    <div className="flex flex-warp gap-3 justify-center items-center text-3xl lg:text-5xl">
      <Link
        className="hover:text-white hover:shadow-md text-[#2197BD]"
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </Link>
      <Link
        className="hover:text-white hover:shadow-md text-[#d97706] -gradient-to-tr from-#facc15 via-#dc2626 to-#6b21a8 "
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare />
      </Link>
      <Link
        className="hover:text-white hover:shadow-md text-[#E52D27]"
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </Link>
      <Link
        className="hover:text-white hover:shadow-md text-[#1e40af]"
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareFacebook />
      </Link>
    </div>
  );
}

export default Socials