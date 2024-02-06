'use client'

import { useState } from 'react'
import BlogCTALayout from './blogCTA/BlogCTALayout'
import { getPostsByPage } from '@/utility/getPostsByPage'

import { useAppContext } from '@/context/AppStates'

const BlogPagination = () => {
const {searchedBlogs} = useAppContext()

  const [currentPage, setCurrentPage] = useState(1)

  // Get the current posts based on page number
  const postsPerPage = 10
  const currentPosts = getPostsByPage(currentPage, postsPerPage)

  // compute the total pages
  let numPages = Math.ceil(searchedBlogs.length / postsPerPage)
  

  const handleNextPage = () => {
    setCurrentPage((prevPage)=>prevPage+1)
  }
  const handlePrevPage = () => {
    setCurrentPage((prevPage)=>Math.max(prevPage-1, 1))
  }
  return (
    <div>
      <div className="flex flex-col gap-3">
        {currentPosts.map((post, i) => (
          <BlogCTALayout key={i} blogPost={post} />
        ))}
      </div>
      {/* Pagination buttons */}
      <div className='flex mt-10 justify-end items-center gap-2'>
        <button className='bg-gray-400 p-2 rounded-md font-bold' onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className='font-bold'> Page {currentPage} of {numPages}  </span>
        <button className='bg-gray-400 p-2 rounded-md font-bold'
          onClick={handleNextPage}
          disabled={currentPosts.length < postsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BlogPagination