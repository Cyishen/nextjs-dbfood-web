import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Slide from '@/components/Slide'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: [
    "100", "200" ,"300", "400", "500", "600", "700", "800","900"
  ]
})


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
      <body className={poppins.className}>
        <AuthProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Slide />
          <Footer />
          <ToastContainer position="bottom-right" theme="light" autoClose={3000} />
        </AuthProvider>
      </body>
    </html>
  )
}
