import Header from '@/components/header'
import SubHeader from '@/components/sub-header'
import TeacherInfo from '@/components/matrix-record/teacher-info'
import Footer from '@/components/footer'
import WorkSchedule from '@/components/matrix-record/work-schedule'
import ClassSchedule from '@/components/matrix-record/class-schedule'
import ActivitiesList from '@/components/matrix-record/activities-list'
import Summary from '@/components/matrix-record/summary'
import '@/app/globals.css'
import StepsCheck from '@/components/matrix-record/steps-check'

export default function MatrixRecordPage() {
  return (
    <>
      <Header />
      <SubHeader />
      <StepsCheck />
      <TeacherInfo />
      <WorkSchedule />
      <ClassSchedule />
      <ActivitiesList />
      <Summary />
      <Footer />
    </>
  )
}
