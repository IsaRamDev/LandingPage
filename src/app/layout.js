import { Inter } from 'next/font/google'
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaramdev Landingpage',
  description: 'Experienced web developer passionate about creating robust and user-friendly web applications. Proficient in HTML, CSS, JavaScript, React, and Node.js. Strong collaborator with cross-functional teams, delivering high-quality code. Committed to promoting diversity in technology and ensuring exceptional user experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon2.ico" />
        {/* Otros elementos del head como el título, descripción, etc. */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
