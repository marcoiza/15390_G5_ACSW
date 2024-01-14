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

export default function MatrixRecordPage({
  searchParams,
}: {
  searchParams: { idBanner: string }
}) {
  const child = (
    <div className="size-1/2 text-right text-white p-10">
      <p>Última modificación: 2021-10-01 10:00:00</p>
      <p>Docente propietario de Matriz: Mauricio Loachamin</p>
    </div>
  )

  return (
    <>
      <Header />
      <SubHeader>{child}</SubHeader>
      <StepsCheck />
      <TeacherInfo idBanner={searchParams.idBanner} />
      <WorkSchedule />
      <ClassSchedule />
      <ActivitiesList />
      <Summary />
      <Footer />
    </>
  )
}
