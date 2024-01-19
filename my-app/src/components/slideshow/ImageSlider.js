'use client'

import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'

import { headerImages } from '@/data/headerImages/HeaderImages'

const ImageSlider = () => {
   
  return (
      <div className='slide-container w-full'>
          <Fade>
              {headerImages.map((img, i) => (
                  <div key={i} className='w-full'>
                      <div className='flex justify-center h-[400px] md:h-[800px] items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${img.src})` }}>
                          
                      </div>
                  </div>
              ))}
          </Fade>
    </div>
  )
}

export default ImageSlider