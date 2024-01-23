import React from 'react'

const TestimonyLayout = ({testimony}) => {
  return (
    <div className="w-full flex flex-col gap-3 bg-gray-700 p-3 rounded-md shadown-md text-white">
      <div className="">{testimony.content}</div>
      <div className='text-end md:text-center font-bold'>{testimony.name}</div>
    </div>
  );
}

export default TestimonyLayout