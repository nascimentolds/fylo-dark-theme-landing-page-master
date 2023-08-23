import './globals.css'
import { Raleway, Open_Sans } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '700'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Frontend Mentor | Fylo landing page with dark theme and features grid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${openSans.variable} font-openSans text-sm bg-darkBlueMainBg`}>{children}</body>
    </html>
  )
}
