import React from "react"
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _merriweather = Merriweather({ subsets: ["latin"], variable: '--font-serif', weight: ['300', '400', '700', '900'] });

export const metadata = {
  title: "Shri Balaji Enterprises | Fly Ash Bricks & Construction Materials",
  description:
    "Manufacturer and supplier of premium fly ash bricks, interlock tiles, cement products in India.",
  keywords: [
    "fly ash bricks",
    "interlock tiles",
    "construction materials",
    "cement products India",
    "Shri Balaji Enterprises",
  ],
};

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
