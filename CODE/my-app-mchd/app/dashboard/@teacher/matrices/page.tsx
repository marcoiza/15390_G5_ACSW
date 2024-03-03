import TeacherMatrix from '@/src/teacher/components/customs/teacher-matrix'
import SubHeader from '@/src/components/sub-header'

export default function TeacherPage({
  searchParams,
}: {
  readonly searchParams: { idBanner: string }
}) {
  return (
    <div>
      <SubHeader />
      <TeacherMatrix idBanner={searchParams.idBanner} />
    </div>
  )
}
