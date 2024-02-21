'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function BtnContainer(props: { idMatrix: string }) {
  const searchParams = useSearchParams()
  const idMatrix = searchParams.get('idMatrix')
  return (
    <div className="flex justify-end bg-slate-200 space-x-4 p-4">
      <button className="bg-white py-1 px-4 rounded border border-black">
        <Link href={`/matrix-preview?idMatrix=${idMatrix}`}>Enviar Matriz</Link>
      </button>
      <p className="bg-yellow-200 py-1 px-4 rounded-xl">Para Revisión</p>
    </div>
  )
}
