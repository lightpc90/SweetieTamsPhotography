import React from "react";
import { blogPosts } from "@/data/blog/BlogPosts";
import BlogCTALayout from "./BlogCTALayout";
import Link from "next/link";

const BlogCTA = () => {
  const recentPosts = blogPosts.slice(0, 3)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-gray-400">Read Our Latest Stories</div>
      <div className="text-2xl font-bold mb-2">Recent Blog Posts</div>
      <div className="flex flex-col gap-3 w-full">
        {recentPosts.map((blogPost, i) => (
          <BlogCTALayout key={i} blogPost={blogPost} />
        ))}
      </div>
      <div className="flex w-full justify-end font-bold">
        <Link href="/blog">Read More...</Link>
      </div>
    </div>
  );
};

export default BlogCTA;
