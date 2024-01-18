import React from 'react'
import Socials from './socials'
import Link from 'next/link'

const HeaderCTA = () => {
  return (
    <div className="bg-[#1A3B2F] flex flex-col items-center justify-center gap-8 py-4 h-[600px] md:h-[800px] ">
      <div className="text-white text-center text-4xl lg:text-7xl font-bold lg:px-[150px]">
        SWEETIE TAMS PHOTOGRAPHY
      </div>
      <div>
        <Socials />
      </div>
      <Link href="/" className="bg-[#5A6D66] text-white py-2 px-4 lg:text-2xl font-bold">
        BOOK US
      </Link>
    </div>
  );
}

export default HeaderCTA