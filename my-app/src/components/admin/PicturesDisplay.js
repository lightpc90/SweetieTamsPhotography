import React from 'react'
import PortfolioButtons from './PortfolioButtons'

const PicturesDisplay = () => {
  return (
      <div className='flex flex-col justify-center items-center'>
          <PortfolioButtons />
          <div className='flex min-h-[200px] lg:min-h-[300px] font-bold w-10/12 lg:w-8/12 justify-center items-center border-4 my-3 border-gray-400'>
              <p>UPLOADED PICTURES SHOW HERE</p>
          </div>
    </div>
  )
}

export default PicturesDisplay