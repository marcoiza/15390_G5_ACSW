import Link from 'next/link'

export default function CoordinationNav() {
  return (
    <nav className="w-1/6 h-screen m-5">
      <h3 className="font-bold text-xl mb-3">Menú Coordination</h3>
      <ul className="space-y-3">
        <li>
          <Link href="/dashboard/received/matrices">Recibidos</Link>
        </li>
        <li>
          <Link href="/dashboard/approved/matrices">Aprobados</Link>
        </li>
        <li>
          <Link href="/dashboard/rejected/matrices">Rechazados</Link>
        </li>
      </ul>
    </nav>
  )
}
