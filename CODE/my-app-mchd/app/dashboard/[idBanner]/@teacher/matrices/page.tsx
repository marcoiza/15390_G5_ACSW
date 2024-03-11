import TeacherMatrices from '@/src/teacher/components/matrices/teacher-matrices'
import SubHeader from '@/src/components/sub-header'
import { getMatricesByIdBanner } from '@/app/actions'
import { TCAMATRICES } from '@prisma/client'

export default async function TeacherPage({
  searchParams,
}: {
  readonly searchParams: { idBanner: string }
}) {
  const matricesByIdBanner: TCAMATRICES[] = await getMatricesByIdBanner(
    searchParams.idBanner
  )

  return (
    <div>
      <SubHeader />
      <TeacherMatrices
        matrices={matricesByIdBanner}
        idBanner={searchParams.idBanner}
      />
    </div>
  )
}
