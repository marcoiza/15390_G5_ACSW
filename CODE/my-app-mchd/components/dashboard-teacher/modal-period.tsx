import ModalPeriodContent from '@/components/dashboard-teacher/modal-period-content'
import type AcademicPeriod from '@/src/interfaces/academic-period'
import prisma from '@/src/lib/db'

async function getData(): Promise<AcademicPeriod[] | null> {
  const res = await prisma.tCAPERIODOSA.findMany()
  return res
}

export default async function ModalPeriod({ idBanner }: { idBanner: string }) {
  const academicPeriods = (await getData()) ?? []

  return (
    <>
      <ModalPeriodContent
        idBanner={idBanner}
        academicPeriods={academicPeriods}
      />
    </>
  )
}
