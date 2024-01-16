import Link from 'next/link'
import React from 'react'
import PortfolioLinks from './PortfolioLinks'

const MobileNavLinks = () => {
  return (
    <div className='flex flex-col p-5 bg-slaet-200 drop-shadow-md'>
      <div>Portfolio</div>
      {
        <div>
          <PortfolioLinks />
        </div>
      }
      <Link href="/">Contact</Link>
      <Link href="/">About</Link>
      <Link href="/">Blog</Link>
    </div>
  );
}

export default MobileNavLinks