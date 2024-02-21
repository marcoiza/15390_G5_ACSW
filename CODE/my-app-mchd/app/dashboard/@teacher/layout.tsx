import TeacherNav from '@/components/teacher/customs/teacher-nav'

export const metadata = {
  title: 'Teacher',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <TeacherNav />
      <div className="w-5/6">{children}</div>
    </div>
  )
}
