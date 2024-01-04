import Footer from '@/components/footer'
import Header from '@/components/header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <h1>Matrix</h1>
      <button className="bg-green-500 py-2 px-4 rounded">
        <Link href="/matrix-record">Matrix Record</Link>
      </button>
      <Footer />
    </>
  )
}
