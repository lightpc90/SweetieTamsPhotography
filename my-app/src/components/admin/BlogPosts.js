import React from 'react'

const BlogPosts = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      {/* Published Blog Posts */}
      <div className="flex flex-col w-10/12 lg:w-8/12  justify-center items-center">
        <h2 className="text-xl lg:text-4xl font-bold my-1">Published Blog Posts</h2>
        <div className="flex min-h-[200px] lg:min-h-[300px] font-bold w-full justify-center items-center border-4 my-3 border-gray-400">
          <p>Published Blog Posts Show Here</p>
        </div>
      </div>
      {/* Scheduled Blog Posts */}
      <div className="flex flex-col w-10/12 lg:w-8/12  justify-center items-center">
        <h2 className="text-xl lg:text-4xl font-bold my-1">Scheduled Blog Posts</h2>
        <div className="flex min-h-[200px] lg:min-h-[300px] font-bold w-full justify-center items-center border-4 my-3 border-gray-400">
          <p>Scheduled Blog Posts Show Here</p>
        </div>
      </div>
      {/* Draft Blog Posts */}
      <div className="flex flex-col w-10/12 lg:w-8/12  justify-center items-center">
        <h2 className="text-xl lg:text-4xl font-bold my-1">Draft Blog Posts</h2>
        <div className="flex min-h-[200px] lg:min-h-[300px] font-bold w-full justify-center items-center border-4 my-3 border-gray-400">
          <p>Draft Blog Posts Show Here</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts