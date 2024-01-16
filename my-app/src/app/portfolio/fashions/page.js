import React from 'react'
import PortfolioHeader from '@/components/portfolio/PortfolioHeader'
import Fashions from '@/components/portfolio/fashions/Fashions'
const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <PortfolioHeader />
      </div>
      <div>
        <Fashions />
      </div>
    </div>
  );
}

export default Page