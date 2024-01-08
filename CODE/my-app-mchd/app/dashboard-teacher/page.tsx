import SendedMatrix from '@/components/dashboard-teacher/sended-matrix'
import Footer from '@/components/footer'
import Header from '@/components/header'
import SubHeader from '@/components/sub-header'

export default function DashboardTeacherPage() {
  return (
    <div>
      <Header />
      <SubHeader />
      <SendedMatrix />
      <Footer />
    </div>
  )
}
