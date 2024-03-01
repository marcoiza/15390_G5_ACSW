'use client'

import { TCAMATRICES } from '@prisma/client'
import Link from 'next/link'
import { useState } from 'react'

export default function MatrixList(props: { rejectedMatrices: TCAMATRICES[] }) {
  const [matrices, setMatrices] = useState<TCAMATRICES[]>(
    props.rejectedMatrices
  )

  return (
    <section className="flex flex-col py-3">
      <h3 className="text-3xl font-bold px-10 py-5">
        Matrices de Carga Horaria Rechazadas
      </h3>
      <div className="flex flex-col size-3/4 mx-auto space-y-3">
        {matrices.map((matrix) => (
          <div className="flex justify-between" key={matrix.TCAMATRICES_ID}>
            <p className="py-1">
              {matrix.TCADOCENTES_ID_BANNER +
                ' - ' +
                matrix.TCAMATRICES_FECHA_CREACION?.toDateString()}
            </p>
            <div className="flex">
              <p className="bg-violet-400 py-1 px-4 rounded-xl">
                Enviado para Corrección 
              </p>
              <button className="bg-white py-1 px-4 ml-3 rounded border border-black">
                <Link
                  href={`/dashboard/rejected/pdf-matrix?idMatrix=${matrix.TCAMATRICES_ID}`}
                >
                  Ver Matriz
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
