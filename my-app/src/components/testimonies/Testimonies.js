import React from 'react'
import TestimoniesSlide from './TestimoniesSlide'

const Testimonies = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center my-10'>
      <p className="text-gray-400">Feedbacks From Our Costumers</p>
      <p className="font-bold text-xl lg:text-3xl text-center">Testimonies</p>
      <TestimoniesSlide />
    </div>
  );
}

export default Testimonies