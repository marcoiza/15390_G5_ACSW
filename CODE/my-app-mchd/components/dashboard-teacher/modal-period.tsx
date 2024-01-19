import ModalPeriodContent from '@/components/dashboard-teacher/modal-period-content'
import { getAcademicPeriods } from '@/app/actions'

export default async function ModalPeriod({ idBanner }: { idBanner: string }) {
  const academicPeriods = (await getAcademicPeriods()) ?? []

  return (
    <>
      <ModalPeriodContent
        idBanner={idBanner}
        academicPeriods={academicPeriods}
      />
    </>
  )
}
