import Footer from '@/src/components/footer'
import Header from '@/src/components/header'

export default function Layout({
  coordinator,
  teacher,
}: {
  readonly coordinator: React.ReactNode
  readonly teacher: React.ReactNode
}) {
  const role = 'coordinator'

  return (
    <>
      <Header />
      {role === 'coordinator' ? coordinator : teacher}
      <Footer />
    </>
  )
}
