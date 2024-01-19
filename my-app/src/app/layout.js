import { Inter } from 'next/font/google'
import './globals.css'

import { AppProvider } from '@/context/AppStates'
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
        <AppProvider>
          <Layout>
            <div
              className="min-h-[900px] bg-cover bg-center bg-fixed bg-no-repeat"
              style={{ backgroundImage: 'url("/sweetie site bg.png")' }}
            >
              {children}
            </div>
          </Layout>
        </AppProvider>
      </body>
    </html>
  );
}
