import React from 'react'
import AboutCard from '@/components/about/AboutCard'
import OurServices from '@/components/about/OurServices'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='font-bold text-2xl lg:text-3xl mt-2'>About Us</h1>
      <div><AboutCard /></div>
      <div><OurServices/></div>
    </div>
  )
}

export default page