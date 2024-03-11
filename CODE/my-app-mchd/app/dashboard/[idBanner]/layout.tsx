import Footer from '@/src/components/footer'
import Header from '@/src/components/header'

export default function Layout({
  coordinator,
  teacher,
  params,
}: {
  readonly coordinator: React.ReactNode
  readonly teacher: React.ReactNode
  readonly params: { idBanner: string }
}) {
  const role = params.idBanner === 'L00384629' ? 'coordinator' : 'teacher'

  return (
    <>
      <Header />
      {role === 'coordinator' ? coordinator : teacher}
      <Footer />
    </>
  )
}
