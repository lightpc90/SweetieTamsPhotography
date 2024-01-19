import React from 'react'
import Link from 'next/link'

const BlogCTALayout = ({blogPost}) => {
  return (
      <Link href={blogPost.link} className='bg-gray-300 w-full flex flex-col p-3 h-[150px] rounded-md shadow-md overflow-hidden hover:bg-white'>
      <p className='text-sm'>{ blogPost.date}</p>    
      <p className='font-bold text-xl md:text-2xl'>{blogPost.title}</p>
          <p>{blogPost.content }</p>
    </Link>
  )
}

export default BlogCTALayout