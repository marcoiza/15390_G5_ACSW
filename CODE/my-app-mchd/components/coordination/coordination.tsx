import Link from 'next/link'

export default function CoordinationNav() {
  return (
    <nav>
      <p>Menú Coordination</p>
      <ul>
        <li>
          <Link href="/coordination/received/matrices">Recibidos</Link>
        </li>
        <li>
          <Link href="/coordination/approved">Aprobados</Link>
        </li>
        <li>
          <Link href="/coordination/rejected">Rechazados</Link>
        </li>
      </ul>
    </nav>
  )
}
