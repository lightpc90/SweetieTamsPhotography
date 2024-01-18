import Link from 'next/link'
import React from 'react'

const PortfolioLinks = () => {
  return (
      <div className='flex flex-col gap-3 p-3 bg-slate-200 md:justify-center md:items-center font-semibold lg:text-xl'>
          <Link href='/portfolio/portraits'>Portraits</Link>
          <Link href='/portfolio/fashions'>Fashions</Link>
          <Link href='/portfolio/events'>Events</Link>
          <Link href='/portfolio/remotes'>Remotes</Link>
          <Link href='/training'>Training</Link>
    </div>
  )
}

export default PortfolioLinks