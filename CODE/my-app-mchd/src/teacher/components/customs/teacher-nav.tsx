'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

let idBanner: string | null = null

export default function TeacherNav() {
  const searchParams = useSearchParams()
  idBanner = idBanner ?? searchParams.get('idBanner')

  return (
    <nav className="w-1/6 h-screen m-5">
      <h3 className="font-bold text-xl mb-3">Menú Docentes</h3>
      <ul className="space-y-3">
        <li>
          <Link href={`/dashboard/matrices?idBanner=${idBanner}`}>
            Matrices
          </Link>
        </li>
        <li>
          <Link href={`/dashboard/matrices`}>Video Tutorial</Link>
        </li>
      </ul>
    </nav>
  )
}
