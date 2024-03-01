import ModalPeriodContent from '@/components/teacher/period/modal-period-content'
import { getAcademicPeriods } from '@/app/actions'

export default async function ModalPeriod({
  idBanner,
}: {
  readonly idBanner: string
}) {
  const academicPeriods = await getAcademicPeriods()

  return (
    <ModalPeriodContent idBanner={idBanner} academicPeriods={academicPeriods} />
  )
}
