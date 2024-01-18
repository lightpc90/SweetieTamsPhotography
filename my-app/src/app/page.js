import Image from 'next/image'
import PortfolioCards from '@/components/portfolioCards/PortfolioCards'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 ">
  <PortfolioCards/>
    </main>
  )
}
