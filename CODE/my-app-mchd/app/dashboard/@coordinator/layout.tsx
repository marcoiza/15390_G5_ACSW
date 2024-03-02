import CoordinationNav from '@/src/coordinator/components/customs/coordination-nav'

export const metadata = {
  title: 'Coordinator',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <div className="flex flex-row">
      <CoordinationNav />
      <div className="w-5/6">{children}</div>
    </div>
  )
}
