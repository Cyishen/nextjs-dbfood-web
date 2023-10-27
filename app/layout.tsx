import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DB food',
  description: 'Best Burgers and Donuts for everyone',
  keywords: ['burger', 'donut', 'cyi', 'DB food'],
  other: {
    "theme-color": "#ffffff",
    "twitter:image": "/share.png",
    "twitter:card": "summary_large_image",
    "og:title": "DB food",
    "og:description": "Best Burgers and Donuts",
    "og:url": "",
    "og:image": "/share.png",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
