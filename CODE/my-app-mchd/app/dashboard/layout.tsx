import Footer from '@/components/customs/footer'
import Header from '@/components/customs/header'

export default function Layout({
  coordinator,
  teacher,
}: {
  coordinator: React.ReactNode
  teacher: React.ReactNode
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
