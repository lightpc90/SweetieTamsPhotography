"use client"

import { useContext, createContext, useState } from 'react'
import { blogPosts } from '@/data/blog/BlogPosts';

const appContext = createContext()

export const useAppContext = () => useContext(appContext); 

export const AppProvider = ({ children }) => {
    const [isNavOpened, setIsNavOpened] = useState(false);
    const [searchedBlogs, setSearchedBlogs] = useState(blogPosts)
    return(
    <appContext.Provider value={{isNavOpened, setIsNavOpened, searchedBlogs, setSearchedBlogs}}> {children}</appContext.Provider>
)}
    