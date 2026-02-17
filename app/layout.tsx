import React from "react"
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _merriweather = Merriweather({ subsets: ["latin"], variable: '--font-serif', weight: ['300', '400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Balaji Enterprises - Premium Construction Materials',
  description: 'Quality fly ash bricks and interlock tiles for construction. Bulk orders, premium materials, fast nationwide delivery to India.',
  generator: 'v0.app',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
   
      </body>
    </html>
  )
}
