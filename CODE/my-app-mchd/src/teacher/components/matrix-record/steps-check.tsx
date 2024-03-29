'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function StepsCheck(props: { readonly idMatrix: string }) {
  const params = useParams<{ idBanner: string }>()

  return (
    <div className="flex bg-slate-200">
      <div className="size-3/4">
        <ul className="flex">
          <li className="p-5">Información del Docente</li>
          <li className="p-5">Horario de Trabajo</li>
          <li className="p-5">Horario de Clase</li>
          <li className="p-5">Actividades</li>
          <li className="p-5">Resumen</li>
        </ul>
      </div>
      <div className="flex justify-end size-1/4">
        <div className="p-4">
          <button className="bg-white py-1 px-4 rounded border border-black">
            <Link
              href={`/dashboard/${params.idBanner}/matrix-preview?idMatrix=${props.idMatrix}`}
            >
              Ver Matriz
            </Link>
          </button>
        </div>
        <div className="p-4">
          <p className="bg-yellow-200 py-1 px-4 rounded-xl">Para Revisión</p>
        </div>
      </div>
    </div>
  )
}
