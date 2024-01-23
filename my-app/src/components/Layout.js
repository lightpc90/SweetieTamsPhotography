import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import MobileNav from './navbar/MobileNav'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <div className="hidden md:block sticky top-0 z-30">
        <Navbar />
      </div>
      <div className="md:hidden sticky top-0 z-30">
        <MobileNav />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout