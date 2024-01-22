import React from 'react'
import AddNewPicture from '@/components/admin/AddNewPicture'
import PicturesDisplay from '@/components/admin/PicturesDisplay';
import NewBlog from '@/components/admin/NewBlog';
import BlogPosts from '@/components/admin/BlogPosts';

const Page = () => {
  return (
    <div className="lg:px-10">
      <div className=" text-xl lg:text-4xl font-bold my-10">
        Admin Dashboard
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <AddNewPicture />
      </div>
      <PicturesDisplay />
      <NewBlog />
      <BlogPosts/>
    </div>
  );
}

export default Page