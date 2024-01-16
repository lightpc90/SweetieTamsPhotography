import React from 'react'
import PortfolioHeader from '@/components/portfolio/PortfolioHeader'
import Remotes from '@/components/portfolio/remotes/Remotes'
const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div ><PortfolioHeader /></div>
      <div><Remotes/></div>
    </div>
  )
}

export default Page