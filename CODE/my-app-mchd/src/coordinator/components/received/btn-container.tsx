'use client'

import { putApprovedMatrix } from '@/src/utils/providers/coordinator/pdf-matrix'
import ObservationsModal from '../customs/observations-modal'
import { useParams, useRouter } from 'next/navigation'

export default function BtnContainer(props: { readonly idMatrix: number }) {
  const router = useRouter()
  const params = useParams<{ idBanner: string }>()

  function approveMatrix(idMatrix: number) {
    putApprovedMatrix(idMatrix)
      .then(() => {
        alert('Matriz Aprobada')
        router.push(`/dashboard/${params.idBanner}/received/matrices`)
      })
      .catch((error) => alert(error))
  }

  return (
    <div className="flex justify-end bg-slate-200 space-x-4 p-4">
      <button
        className="btn-white"
        onClick={() => {
          approveMatrix(props.idMatrix)
        }}
      >
        Aprobar Matriz
      </button>
      <ObservationsModal />
      <p className="bg-yellow-400 py-1 px-4 rounded-xl">
        Recibido para Revisión
      </p>
    </div>
  )
}
