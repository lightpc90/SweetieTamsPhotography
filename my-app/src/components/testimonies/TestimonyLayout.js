import React from 'react'

const TestimonyLayout = ({testimony}) => {
  return (
    <div className="w-full md:w-8/12 lg:w-6/12 lg:p-10 flex flex-col md:text-3xl gap-3 bg-gray-700 p-4 rounded-md shadown-md text-white">
      <div className="">{testimony.content}</div>
      <div className='text-end md:text-center font-bold'>{`--${testimony.name}`}</div>
    </div>
  );
}

export default TestimonyLayout