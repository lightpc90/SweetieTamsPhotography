import React from 'react'
import { blogPosts } from '@/data/blog/BlogPosts'
import BlogPost from '@/components/blog/BlogPost'

const Page = ({ params }) => {
  console.log('params: ', params)
  const { id } = params
  const  post = blogPosts[id - 1] || {}
  return (
    <div className='py-10 md:px-[100px] lg:px-[500px]'>
      <BlogPost post={post} />
    </div>
  )
}

export default Page