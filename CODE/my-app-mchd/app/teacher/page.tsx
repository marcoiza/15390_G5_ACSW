import TeacherMatrix from '@/components/teacher/teacher-matrix'
import SubHeader from '@/components/customs/sub-header'

export default function TeacherPage({
  searchParams,
}: {
  searchParams: { idBanner: string }
}) {
  return (
    <div>
      <SubHeader />
      <TeacherMatrix idBanner={searchParams.idBanner} />
    </div>
  )
}
