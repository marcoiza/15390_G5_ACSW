'use client'

import {
  putApprovedMatrix,
  putRejectedMatrix,
} from '@/src/utils/providers/coordinator/pdf-matrix'

export default function BtnContainer(props: { idMatrix: number }) {
  function approveMatrix(idMatrix: number) {
    putApprovedMatrix(idMatrix)
      .then(() => alert('Matriz Aprobada'))
      .catch((error) => alert(error))
  }

  function rejectedMatrix(idMatrix: number) {
    putRejectedMatrix(idMatrix)
      .then(() => alert('Matriz Rechazada'))
      .catch((error) => alert(error))
  }

  return (
    <div className="flex justify-end bg-slate-200 space-x-4 p-4">
      <button
        className="bg-white py-1 px-4 rounded border border-black"
        onClick={() => {
          approveMatrix(props.idMatrix)
        }}
      >
        Aprobar Matriz
      </button>
      <button
        className="bg-white py-1 px-4 rounded border border-black"
        onClick={() => {
          rejectedMatrix(props.idMatrix)
        }}
      >
        Rechazar Matriz
      </button>
      <p className="bg-yellow-400 py-1 px-4 rounded-xl">
        Recibido para Revisión
      </p>
    </div>
  )
}
