import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ({children}) => {
  return (
      <div className='flex flex-col min-h-screen justify-between'>
          <Header />
          {children}
          <Footer/>
    </div>
  )
}

export default Layout