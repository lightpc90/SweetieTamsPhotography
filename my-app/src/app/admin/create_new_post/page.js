import React from 'react'
import NewBlogPost from '@/components/admin/NewBlogPost'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='my-10 p-2'>
      <Link href="/admin" className="bg-[#BD8E25] p-2 text-white font-bold">
        Back to Admin Dashboard
      </Link>
      <NewBlogPost />
    </div>
  );
}

export default Page