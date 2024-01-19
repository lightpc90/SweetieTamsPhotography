import Link from 'next/link'
import React from 'react'
import { useAppContext } from '@/context/AppStates';

const PortfolioLinks = () => {
   const { setIsNavOpened } = useAppContext();
  return (
    <div className="flex flex-col gap-3 p-3 bg-slate-200 md:justify-center md:items-center font-semibold lg:text-xl">
      <Link
        href="/portfolio/portraits"
        onClick={() => {
          setIsNavOpened(false);
        }}
      >
        Portraits
      </Link>
      <Link
        onClick={() => {
          setIsNavOpened(false);
        }}
        href="/portfolio/fashions"
      >
        Fashions
      </Link>
      <Link
        onClick={() => {
          setIsNavOpened(false);
        }}
        href="/portfolio/events"
      >
        Events
      </Link>
      <Link
        onClick={() => {
          setIsNavOpened(false);
        }}
        href="/portfolio/remotes"
      >
        Remotes
      </Link>
      <Link
        onClick={() => {
          setIsNavOpened(false);
        }}
        href="/training"
      >
        Training
      </Link>
    </div>
  );
}

export default PortfolioLinks