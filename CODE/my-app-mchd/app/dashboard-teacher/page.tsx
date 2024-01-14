import Footer from '@/components/footer'
import Header from '@/components/header'
import TeacherMatrix from '@/components/dashboard-teacher/teacher-matrix'
import SubHeader from '@/components/sub-header'

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
