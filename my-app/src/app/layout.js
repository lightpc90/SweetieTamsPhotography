import { Inter } from 'next/font/google'
import './globals.css'

import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sweetie Tams Photography App',
  description: 'Portfolio website and blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <div
            className="min-h-[900px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/sweetie site bg.png")' }}
          >
            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
