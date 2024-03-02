'use client'

import { putRejectedMatrix } from '@/src/utils/providers/coordinator/pdf-matrix'

export default function BtnContainer(props: { readonly idMatrix: number }) {
  function rejectedMatrix(idMatrix: number) {
    putRejectedMatrix(idMatrix)
      .then(() => {
        alert('Matriz Rechazada')
      })
      .catch((error: any) => {
        alert(error)
      })
  }

  return (
    <div className="flex justify-end bg-slate-200 space-x-4 p-4">
      <button
        className="bg-white py-1 px-4 rounded border border-black"
        onClick={() => {
          rejectedMatrix(props.idMatrix)
        }}
      >
        Rechazar Matriz
      </button>
      <p className="bg-green-400 py-1 px-4 rounded-xl">Aprobada</p>
    </div>
  )
}
