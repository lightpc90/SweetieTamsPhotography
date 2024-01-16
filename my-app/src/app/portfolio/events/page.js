import React from 'react'
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import Events from '@/components/portfolio/events/Events';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <PortfolioHeader />
      </div>
      <div>
        <Events />
      </div>
    </div>
  );
}

export default Page