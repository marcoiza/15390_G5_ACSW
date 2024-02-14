'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [idBanner, setIdBanner] = useState('')

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col space-y-4 justify-center size-fit p-5 border border-green-600 rounded-lg">
        <h1 className="text-3xl text-center font-bold">Iniciar Sesión</h1>
        <label htmlFor="idBanner">ID Banner</label>
        <input
          className="bg-green-200 rounded-lg p-1"
          type="text"
          name="idBanner"
          onChange={(e) => setIdBanner(e.target.value)}
        />
        <button className="text-white p-1 bg-green-700 rounded-lg">
          <Link
            href={{
              pathname: '/teacher',
              query: { idBanner: idBanner },
            }}
          >
            Ingresar
          </Link>
        </button>
      </div>
    </div>
  )
}
