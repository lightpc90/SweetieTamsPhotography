'use client'

import {useState} from 'react'

const NewBlog = () => {
    const [addNewBlog, setAddNewBlog] = useState(false)
  return (
    <div className='my-10 px-3'>
      {addNewBlog ? (
        <></>
      ) : (
        <button onClick={()=>{setAddNewBlog(true)}} className="bg-[#BD8E25] py-1 px-2 text-white font-semibold">ADD NEW BLOG</button>
      )}
    </div>
  );
}

export default NewBlog