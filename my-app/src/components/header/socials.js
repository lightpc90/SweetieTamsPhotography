import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Socials = () => {
  return (
      <div className='flex flex-warp gap-3 justify-center items-center text-3xl lg:text-5xl'>
          <Link href='/'><FaLinkedin/></Link>
          <Link href='/'><FaInstagramSquare/></Link>
          <Link href='/'><FaYoutube/></Link>
          <Link href='/'><FaSquareFacebook/></Link>
    </div>
  )
}

export default Socials