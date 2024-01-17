import ModalPeriodContent from '@/components/dashboard-teacher/modal-period-content'
import type TCAPERIODOSA from '@/src/models/academic-period'
import prisma from '@/src/libs/db'

async function getData(): Promise<TCAPERIODOSA[] | null> {
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
