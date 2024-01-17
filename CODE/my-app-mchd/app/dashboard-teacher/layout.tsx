export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
