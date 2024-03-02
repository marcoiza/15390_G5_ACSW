'use client'

import Link from 'next/link'

export default function BtnContainer(props: { readonly idMatrix: string }) {
  return (
    <div className="flex justify-end bg-slate-200 space-x-4 p-4">
      <button className="bg-white py-1 px-4 rounded border border-black">
        <Link href={`/matrix-preview?idMatrix=${props.idMatrix}`}>
          Enviar Matriz
        </Link>
      </button>
      <p className="bg-yellow-200 py-1 px-4 rounded-xl">Para Revisión</p>
    </div>
  )
}
