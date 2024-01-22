import React from 'react'
import Socials from '../header/socials';

const AboutCard = () => {
  return (
    <div className="flex flex-col mt-[150px] lg:mt-[200px] justify-center items-center relative">
      <div className="absolute top-[-75px] lg:top-[-150px] w-[150px] h-[150px] lg:w-[290px] shadow-md ring-4 ring-white lg:h-[290px] bg-gray-400 rounded-full bg-center bg-cover bg-no-repeat"
      style={{backgroundImage: 'url("/Portrait and Headshot/S1.jpg")'}}></div>
      <div className="bg-[#1A3B2F] flex flex-col justify-center items-center h-[300px] w-[350px] pt-[80px] lg:pt[190px] lg:w-[900px] lg:h-[600px] rounded-md lg:rounded-2xl shadow-md">
        <h2 className="text-white font-bold text-xl">
          SWEETIE TAMS PHOTOGRAPHY
        </h2>
        <h2 className="text-[#BD8E25] font-bold text-xl">234(0)813 421 300</h2>
        <button className="bg-[#BD8E25] hover:bg-white hover:text-[#BD8E25] py-1 px-4 my-2  text-white font-bold text-xl">
          CHAT WITH US NOW!
        </button>
        <div className='text-white font-bold my-2' >Connect With Us</div>
        <Socials/>
      </div>
    </div>
  );
}

export default AboutCard