"use client"

import { useContext, createContext, useState } from 'react'

const appContext = createContext()

export const useAppContext = () => useContext(appContext); 

export const AppProvider = ({ children }) => {
    const [isNavOpened, setIsNavOpened] = useState(false);
    return(
    <appContext.Provider value={{isNavOpened, setIsNavOpened}}> {children}</appContext.Provider>
)}
    