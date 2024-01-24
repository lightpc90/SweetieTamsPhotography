import React from 'react'
import Link from 'next/link';

const PortfolioCardLayout = ({coverPicture}) => {
  return (
    <Link className="w-full lg:w-5/12 hover:ring-4 hover:ring-yellow-400 ease-linear transform hover:scale-105 transition duration-500 hover:m-5" href={coverPicture.link}>
      <div
        className="bg-white  flex justify-center items-center h-[300px] md:h-[800px] rounded-md text-center shadow-md bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${coverPicture.img.src})` }}
      >
        <div className="bg-white p-2 bg-opacity-50 text-2xl lg:text-5xl font-bold shadow-md rounded-md ">
          {coverPicture.name}
        </div>
      </div>
    </Link>
  );
}

export default PortfolioCardLayout