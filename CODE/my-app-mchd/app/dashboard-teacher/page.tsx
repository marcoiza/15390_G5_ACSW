import Footer from '@/components/customs/footer'
import Header from '@/components/customs/header'
import TeacherMatrix from '@/components/customs/teacher-matrix'
import SubHeader from '@/components/customs/sub-header'

export default function DashboardTeacherPage({
  searchParams,
}: {
  searchParams: { idBanner: string }
}) {
  return (
    <div>
      <Header />
      <SubHeader />
      <TeacherMatrix idBanner={searchParams.idBanner} />
      <Footer />
    </div>
  )
}
