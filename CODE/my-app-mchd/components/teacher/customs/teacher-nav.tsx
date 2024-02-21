import Link from 'next/link'

export default function TeacherNav() {
  return (
    <nav className="w-1/6 h-screen m-5">
      <h3 className="font-bold text-xl mb-3">Menú Docentes</h3>
      <ul className="space-y-3">
        <li>
          <Link href="/dashboard/matrices">Matrices</Link>
        </li>
        <li>
          <Link href="/dashboard/matrices">Video Tutorial</Link>
        </li>
      </ul>
    </nav>
  )
}
