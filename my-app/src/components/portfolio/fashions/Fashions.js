import React from 'react'
import { fashions } from '@/data/portfolio/fashions/Fashions'
import Image from 'next/image'

const Fashions = () => {
  return (
    <div>
      <div className="font-bold text-5xl lg:text-7xl text-center">Fashion</div>
      <div className="flex flex-wrap justify-center items-center gap-3 my-10">
        {fashions.map((img, i) => (
            <Image src={img} alt={`${img}`} width={600} height={600} key={i} className='w-10/12 lg:w-4/12 shadow-md'/>
        ))}
      </div>
    </div>
  );
}

export default Fashions