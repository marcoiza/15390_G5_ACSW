import TeacherMatrix from '@/components/teacher/customs/teacher-matrix'
import SubHeader from '@/components/customs/sub-header'

export default function TeacherPage({
  searchParams,
}: {
  searchParams: { idBanner: string }
}) {
  return (
    <div>
      <SubHeader />
      <p>Teacher Page</p>
      <TeacherMatrix idBanner={searchParams.idBanner} />
    </div>
  )
}
