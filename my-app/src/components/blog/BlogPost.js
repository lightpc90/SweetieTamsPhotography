import React from 'react'
import { dateFormatToNow } from '../utility/dateFormat';

const BlogPost = ({post}) => {
  return (
    <div className="p-5 md:px-[200px] lg:px-[700px] mb-6 bg-white shadow">
      {post?.img && <img src={post.img} alt={post.title} />}
      <h2 className="text-2xl font-bold mb-10">{post.title}</h2>

      <hr />
      <div className='my-3'>
        <p>Written by: sweetie tams</p>
        <small>{dateFormatToNow(post.date)} </small>
      </div>
      <hr />

      <p className="my-10">{post.content}</p>
    </div>
  );
}

export default BlogPost