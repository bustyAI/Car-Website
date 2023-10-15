import { Footer, NavBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'RentoRide',
  description: 'Hop in Your New Ride Today.',
}
// We can change the layout of our app here and what gets rendered where 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        
        {children}
        <Footer />
        </body>
    </html>
  )
}
