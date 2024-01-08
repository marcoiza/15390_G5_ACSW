import Footer from '@/components/footer'
import Header from '@/components/header'
import SubHeader from '@/components/sub-header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <h1>Matrix</h1>
      <button className="bg-green-500 py-2 px-4 rounded">
        <Link href="/dashboard-coordination">Home Coordination</Link>
      </button>
      <button className="bg-green-500 py-2 px-4 rounded">
        <Link href="/dashboard-teacher">Home Teacher</Link>
      </button>
      <Footer />
    </>
  )
}
