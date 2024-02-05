'use client'

import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { TCAPERIODOSA } from '@prisma/client'
import type { TCAMATRICES } from '@prisma/client'
import { postMatrix } from '@/src/utils/providers/matrix'
import { InitialMatrix } from '@/src/models/matrix'

interface PeriodModalProps {
  idBanner: string
  academicPeriods: TCAPERIODOSA[]
}

export default function ModalPeriodContent(props: PeriodModalProps) {
  const codPeriod: number = props.academicPeriods[0].TCAPERIODOSA_CODIGO
  const [matrix, setMatrix] = useState<TCAMATRICES>(
    InitialMatrix(codPeriod, props.idBanner)
  )
  const router = useRouter()

  function postNewMatrix() {
    postMatrix(matrix)
      .then((res) => {
        router.push(
          '/matrix-record?idBanner=' +
            props.idBanner +
            '&idMatrix=' +
            res.idMatrix
        )
      })
      .catch((err: Error) => {
        alert(err.message)
      })
  }

  function updateCodPeriod(e: ChangeEvent<HTMLSelectElement>) {
    setMatrix({
      ...matrix,
      TCAPERIODOSA_CODIGO: Number(e.target.value),
    })
  }

  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-xl font-bold text-center">
        Seleccionar Periodo Académico
      </h3>
      <div className="flex flex-col justify-center">
        <select className="my-3 py-1 rounded" onChange={updateCodPeriod}>
          {props.academicPeriods.map((period) => (
            <option
              className="text-center"
              key={period.TCAPERIODOSA_CODIGO}
              value={period.TCAPERIODOSA_CODIGO}
            >
              {period.TCAPERIODOSA_CODIGO +
                ' - ' +
                period.TCAPERIODOSA_DESCRIPCION}
            </option>
          ))}
        </select>
        <div className="flex justify-center">
          <button className="btn-success" onClick={postNewMatrix}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
