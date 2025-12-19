import React from 'react'
import './styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata = {
  description: 'Myers Driving Academy - Helping Ohio Teens Become Safe, Confident Drivers',
  title: 'Myers Driving Academy',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
