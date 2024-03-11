'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function TeacherNav() {
  const params = useParams<{ idBanner: string }>()

  return (
    <>
      <div className="w-1/6 h-screen bg-[url('/espe-bg.jpg')] opacity-20 absolute"></div>
      <nav className="w-1/6 h-screen z-10">
        <h3 className="font-bold text-xl mx-5 my-3">Menú Docentes</h3>
        <ul>
          <li>
            <Link
              className="btn-navbar"
              href={`/dashboard/${params.idBanner}/matrices?idBanner=${params.idBanner}`}
            >
              Matrices
            </Link>
          </li>
          <li>
            <Link
              className="btn-navbar"
              href={`/dashboard/${params.idBanner}/matrices?idBanner=${params.idBanner}`}
            >
              Tutorial
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
