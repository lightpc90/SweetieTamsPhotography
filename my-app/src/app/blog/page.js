'use client'
import React from 'react'
import BlogPagination from '@/components/blog/BlogPagination';
import SearchBar from '@/components/seachBar/SearchBar';


const Page = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center">
     <SearchBar />
      <h3 className="font-bold my-10 text-start lg:text-2xl">Blog Posts</h3>
      <BlogPagination/>
    </div>
  );
}

export default Page