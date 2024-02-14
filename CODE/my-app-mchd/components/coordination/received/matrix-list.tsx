'use client'

import { TCAMATRICES } from '@prisma/client'
import Link from 'next/link'
import { useState } from 'react'

export default function MatrixList(props: { receivedMatrices: TCAMATRICES[] }) {
  const [matrices, setMatrices] = useState<TCAMATRICES[]>(
    props.receivedMatrices
  )

  return (
    <section className="py-3">
      <h3 className="text-3xl font-bold px-10 py-5">
        Matries de Carga Horaria Recibidas
      </h3>
      <div className="flex justify-center">
        {matrices.map((matrix) => (
          <div
            className="flex size-3/4 justify-between"
            key={matrix.TCAMATRICES_ID}
          >
            <p className="py-1">
              {matrix.TCADOCENTES_ID_BANNER +
                ' - ' +
                matrix.TCAMATRICES_FECHA_CREACION?.toDateString()}
            </p>
            <div className="flex">
              <p className="bg-yellow-200 py-1 px-4 rounded-xl">
                Recibido para Revisión
              </p>
              <button className="bg-white py-1 px-4 ml-3 rounded border border-black">
                <Link href={'/coordination/received/pdf'}>Ver Matriz</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
