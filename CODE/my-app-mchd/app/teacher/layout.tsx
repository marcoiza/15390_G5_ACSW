import Footer from '@/components/customs/footer'
import Header from '@/components/customs/header'

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

export default function Layout({
  children,
  matrices,
}: {
  children: React.ReactNode
  matrices: React.ReactNode
}) {
  return (
    <section>
      <Header />
      {children}
      {matrices}
      <Footer />
    </section>
  )
}
