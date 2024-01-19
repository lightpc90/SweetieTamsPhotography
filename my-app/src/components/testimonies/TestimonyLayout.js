import React from 'react'

const TestimonyLayout = ({testimony}) => {
  return (
    <div className="w-full flex flex-col gap-3 text-center">
      <div className="text-7xl">{testimony.content}</div>
      <div className='text-end md:text-center font-bold'>{testimony.name}</div>
    </div>
  );
}

export default TestimonyLayout