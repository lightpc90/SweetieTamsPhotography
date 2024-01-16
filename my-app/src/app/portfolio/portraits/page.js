import React from 'react'
import PortfolioHeader from '@/components/portfolio/PortfolioHeader'
import Portraits from '@/components/portfolio/portraits/Portraits'
const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <PortfolioHeader />
      </div>
      <div>
        <Portraits />
      </div>
    </div>
  );
}

export default Page