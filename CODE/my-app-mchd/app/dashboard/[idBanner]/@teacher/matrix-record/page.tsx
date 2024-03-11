import ActivitiesList from '@/src/teacher/components/matrix-record/activities-list'
import ClassSchedule from '@/src/teacher/components/matrix-record/class-schedule'
import WorkSchedule from '@/src/teacher/components/matrix-record/work-schedule'
import TeacherInfo from '@/src/teacher/components/matrix-record/teacher-info'
import StepsCheck from '@/src/teacher/components/matrix-record/steps-check'
import SubHeader from '@/src/components/sub-header'
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
  readonly searchParams: { idBanner: string; idMatrix: string }
}) {
  const matrix = await getMatrix(searchParams.idBanner)
  const teacher = await getTeacher(searchParams.idBanner)
  const workSchedule = await getWorkSchedule(Number(searchParams.idMatrix))
  const classSchedule = await getClassSchedule(Number(searchParams.idMatrix))
  const activities = await getUnselectedActivities(
    Number(searchParams.idMatrix)
  )
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
      <SubHeader>{childSubHeader}</SubHeader>
      <StepsCheck idMatrix={searchParams.idMatrix} />
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
    </>
  )
}
