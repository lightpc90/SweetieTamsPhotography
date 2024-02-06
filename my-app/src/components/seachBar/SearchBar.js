"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppStates";
import { blogPosts } from "@/data/blog/BlogPosts";
import {LuSearch} from "react-icons/lu";

const SearchBar = () => {
  const { searchedBlogs, setSearchedBlogs } = useAppContext();
  const [searchedWords, setSearchedWords] = useState("");
  // search function
  const searchResult = () => {
    const results = searchedBlogs.filter((post) =>
      post.title.toLowerCase().includes(searchedWords.toLowerCase())
    );
    setSearchedBlogs(results);
  };
  // search event handler
  const handleSearch = (e) => {
    setSearchedWords(e.target.value);
  };
  useEffect(() => {
    if (!searchedWords) setSearchedBlogs(blogPosts);
    else searchResult();
  }, [searchedWords]);

  return (
    <div className="relative text-white flex flex-col justify-center lg:w-5/12 ">
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search blog posts..."
        className="py-2 pl-3 pr-10 w-full bg-gray-900 rounded-md shadow-md "
      />
      <div className="absolute right-1">
        <LuSearch size={25} />
      </div>
    </div>
  );
};

export default SearchBar;
