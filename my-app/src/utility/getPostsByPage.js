'use client'
import { useAppContext } from "@/context/AppStates";

// Function to get a subset of posts based on the current page
export const getPostsByPage = (page, postsPerPage) => {
  const {searchedBlogs}= useAppContext()
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return searchedBlogs.slice(startIndex, endIndex);
};


