import React from 'react'
import { dateFormatToNow } from '../utility/dateFormat';
import Link from 'next/link';

const BlogPost = ({post}) => {
  return (
    <div>
      <div className="p-5 md:px-[100px] lg:px-[200px] mb-6 bg-white shadow">
        {post?.img && <img src={post.img} alt={post.title} />}
        <h2 className="text-2xl lg:text-3xl font-bold mb-10">{post.title}</h2>

        <hr />
        <div className="my-3">
          <p>Written by: sweetie tams</p>
          <small>{dateFormatToNow(post.date)} </small>
        </div>
        <hr />

        <p className="my-10">{post.content}</p>
      </div>
      <Link className='flex justify-center font-bold text-green-900' href='/blog'>Check out other stories</Link>
    </div>
  );
}

export default BlogPost