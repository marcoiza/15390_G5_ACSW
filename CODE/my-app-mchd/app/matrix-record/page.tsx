import Header from '@/components/header'
import SubHeader from '@/components/sub-header'
import TeacherInfo from '@/components/matrix-record/teacher-info'
import Footer from '@/components/footer'
import WorkSchedule from '@/components/matrix-record/work-schedule'
import ClassSchedule from '@/components/matrix-record/class-schedule'
import ActivitiesList from '@/components/matrix-record/activities-list'
import StepsCheck from '@/components/matrix-record/steps-check'
import {
  getUnselectedActivities,
  getActivitiesOfMatrix,
  getClassSchedule,
  getMatrix,
  getTeacher,
  getWorkSchedule,
} from '@/app/actions'

export default async function MatrixRecordPage({
  searchParams,
}: {
  searchParams: { idBanner: string; idMatrix: string }
}) {
  const matrix = await getMatrix(searchParams.idBanner)
  const teacher = await getTeacher(searchParams.idBanner)
  const workSchedule = await getWorkSchedule(Number(searchParams.idMatrix))
  const classSchedule = await getClassSchedule(Number(searchParams.idMatrix))
  const activities = await getUnselectedActivities(Number(searchParams.idMatrix))
  const docActivities = await getActivitiesOfMatrix(
    Number(searchParams.idMatrix),
    'doc'
  )
  const invActivities = await getActivitiesOfMatrix(
    Number(searchParams.idMatrix),
    'inv'
  )
  const gesActivities = await getActivitiesOfMatrix(
    Number(searchParams.idMatrix),
    'ges'
  )
  const vinActivities = await getActivitiesOfMatrix(
    Number(searchParams.idMatrix),
    'vin'
  )

  const childSubHeader = (
    <div className="size-1/2 text-right text-white p-10">
      <p>Última modificación: 2021-10-01 10:00:00</p>
      <p>Docente propietario de Matriz: Mauricio Loachamin</p>
    </div>
  )

  return (
    <>
      <Header />
      <SubHeader>{childSubHeader}</SubHeader>
      <StepsCheck />
      <TeacherInfo idBanner={searchParams.idBanner} />
      <WorkSchedule workSchedule={workSchedule} />
      <ClassSchedule
        idMatrix={Number(searchParams.idMatrix)}
        codPeriod={matrix?.TCAPERIODOSA_CODIGO ?? 0}
        classSchedule={classSchedule}
      />
      <ActivitiesList
        activities={activities}
        docActivities={docActivities}
        invActivities={invActivities}
        gesActivities={gesActivities}
        vinActivities={vinActivities}
        hoursForActivities={teacher?.TCADOCENTES_HORAS_CONTRATO ?? 0}
      />
      <Footer />
    </>
  )
}
