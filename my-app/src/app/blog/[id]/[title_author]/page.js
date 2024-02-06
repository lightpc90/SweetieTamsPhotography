import React from 'react'
import { blogPosts } from '@/data/blog/BlogPosts'
import BlogPost from '@/components/blog/BlogPost'

const Page = ({ params }) => {
  console.log('params: ', params)
  const { id, title_author } = params
  const  post = blogPosts[id - 1] || {}
  return (
    <div>
      <BlogPost post={post} />
    </div>
  )
}

export default Page