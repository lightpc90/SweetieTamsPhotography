import React from 'react'
import Link from 'next/link'
import { dateFormatToNow } from '@/components/utility/dateFormat'

const BlogCTALayout = ({blogPost}) => {
  return (
      <Link href={`blog/${blogPost.id}/${blogPost.title}by_sweetie_tams`} className='bg-gray-300 w-full flex flex-col p-3 min-h-[150px] rounded-md shadow-md overflow-hidden hover:bg-white'>
      <p className='text-sm'>{ dateFormatToNow(blogPost.date)}</p>    
      <p className='font-bold text-xl md:text-2xl'>{blogPost.title}</p>
          <p>{`${blogPost.content.substring(0, 100)}... Read more` }</p>
    </Link>
  )
}

export default BlogCTALayout