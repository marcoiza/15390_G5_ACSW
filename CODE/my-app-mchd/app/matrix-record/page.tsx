import Header from '@/components/header'
import SubHeader from '@/components/sub-header'
import TeacherInfo from '@/components/matrix-record/teacher-info'
import Footer from '@/components/footer'
import WorkSchedule from '@/components/matrix-record/work-schedule'
import ClassSchedule from '@/components/matrix-record/class-schedule'
import ActivitiesList from '@/components/matrix-record/activities-list'
import Summary from '@/components/matrix-record/summary'
import StepsCheck from '@/components/matrix-record/steps-check'
import type TCAMATRICES from '@/src/models/matrix'
import prisma from '@/src/libs/db'
import { TCAHORARIOST } from '@prisma/client'

async function getMatrix(idBanner: string): Promise<TCAMATRICES | null> {
  const res = await prisma.tCAMATRICES.findFirst({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

async function getWorkSchedule(idMatrix: number) {
  const res: TCAHORARIOST[] = await prisma.tCAHORARIOST.findMany({
    where: { TCAMATRICES_ID: idMatrix },
  })
  return res
}

export default async function MatrixRecordPage({
  searchParams,
}: {
  searchParams: { idBanner: string; idMatrix: string }
}) {
  const matrix = await getMatrix(searchParams.idBanner)
  const workSchedule = await getWorkSchedule(Number(searchParams.idMatrix))

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
      <WorkSchedule workSchedule={workSchedule} />
      <ClassSchedule />
      <ActivitiesList />
      <Summary />
      <Footer />
    </>
  )
}
