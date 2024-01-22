import React from 'react'
import Socials from '../header/socials';
import Link from 'next/link';
import { whatsappUrl } from '../utility/whatsappChatProps';
import RoundDp from './RoundDp';

const AboutCard = () => {
  return (
    <div className="flex flex-col mt-[150px] lg:mt-[200px] justify-center items-center relative">
      {/* Display picture */}
      <RoundDp/>
      <div className="bg-[#1A3B2F] flex flex-col justify-center items-center h-[300px] w-[350px] pt-[80px] lg:pt[190px] lg:w-[900px] lg:h-[600px] rounded-md lg:rounded-2xl shadow-md">
        <h2 className="text-white font-bold text-xl">
          SWEETIE TAMS PHOTOGRAPHY
        </h2>
        <h2 className="text-[#BD8E25] font-bold text-xl">234(0)813 421 300</h2>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BD8E25] hover:bg-white hover:text-[#BD8E25] py-1 px-4 my-2  text-white font-bold text-xl"
        >
          CHAT WITH US NOW!
        </Link>
        <div className="text-white font-bold my-2">Connect With Us</div>
        <Socials />
      </div>
    </div>
  );
}

export default AboutCard