import Footer from '@/components/customs/footer'
import Header from '@/components/customs/header'
import CoordinationNav from '@/components/coordination/coordination'
import React from 'react'

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-row">
      <section className="w-1/6 h-screen">
        <CoordinationNav />
      </section>
      <section className="w-5/6">
        <Header />
        {children}
        <Footer />
      </section>
    </section>
  )
}
