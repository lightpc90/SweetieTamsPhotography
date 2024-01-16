import Link from 'next/link'
import React from 'react'

const PortfolioLinks = () => {
  return (
      <div className='flex flex-col gap-3 p-5'>
          <Link href='/portfolio/portraits'>Portraits</Link>
          <Link href='/portfolio/fashions'>Fashions</Link>
          <Link href='/portfolio/events'>Events</Link>
          <Link href='/portfolio/remotes'>Remotes</Link>
          <Link href='/porfolio/training'>Training</Link>
    </div>
  )
}

export default PortfolioLinks