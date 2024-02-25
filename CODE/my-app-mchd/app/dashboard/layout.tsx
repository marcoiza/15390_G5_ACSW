import Footer from '@/components/customs/footer'
import Header from '@/components/customs/header'

export default function Layout({
  coordinator,
  teacher,
}: {
  readonly coordinator: React.ReactNode
  readonly teacher: React.ReactNode
}) {
  const role = 'teacher'

  return (
    <>
      <Header />
      {role === 'coordinator' ? coordinator : teacher}
      <Footer />
    </>
  )
}
