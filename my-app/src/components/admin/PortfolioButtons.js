import React from 'react'
import { portfolios } from '@/data/portfolio/Portfolios'

const PortfolioButtons = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-3'>
      {portfolios.map((portfolio, i) => (
        <button key={i} className="bg-[#1A3B2F] py-1 px-2 text-white font-bold">{portfolio.name}</button>
      ))}
    </div>
  );
}

export default PortfolioButtons