import React from 'react'
import TestimoniesSlide from './TestimoniesSlide'
import Link from 'next/link';

const Testimonies = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center my-10">
      <p className="text-gray-400">Reviews From Our Costumers</p>
      <p className="font-bold text-xl lg:text-3xl text-center">Testimonies</p>
      <TestimoniesSlide />
      <Link href="https://g.co/kgs/xCsQLYp" target='_blank' rel='noopener noreferer' className="font-semibold">
        Check Our Reviews on Google Business
      </Link>
    </div>
  );
}

export default Testimonies