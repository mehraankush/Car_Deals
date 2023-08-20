import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import { Navbar , Footer,Providers} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Web site for viewing the Latest released cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
