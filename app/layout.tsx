import type { Metadata } from 'next'
import { Manrope, Poppins } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'ii Venture Studios',
  description: 'A venture studio for founders and ideas that refuse to accept the world as it is.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}