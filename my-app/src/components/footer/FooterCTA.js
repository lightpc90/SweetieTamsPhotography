import React from 'react'
import Socials from '../header/socials';
import { FaCamera } from "react-icons/fa";

const FooterCTA = () => {
    return <div className="bg-[#5A6D66] h-[400px] flex flex-col justify-center items-center gap-5 text-white text-xl lg:text-5xl font-bold">
        <FaCamera size={40}/>
        <div>SWEETIE TAMS PHOTOGRAPHY</div>
        <Socials/>
  </div>;
}

export default FooterCTA