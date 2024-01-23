import React from 'react'
import TestimoniesSlide from './TestimoniesSlide'
import Link from 'next/link';

const Testimonies = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center my-10'>
      <p className="text-gray-400">Reviews From Our Costumers</p>
      <p className="font-bold text-xl lg:text-3xl text-center">Testimonies</p>
      <TestimoniesSlide />
      <Link href='/'>You Can Check all Our Reviews Here</Link>
    </div>
  );
}

export default Testimonies