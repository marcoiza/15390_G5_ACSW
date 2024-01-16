'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type AcademicPeriod from '@/src/interfaces/academic-period'
import type Matrix from '@/src/interfaces/matrix'
import { createMatrix } from '@/src/providers/matrix'

interface PeriodModalProps {
  idBanner: string
  academicPeriods: AcademicPeriod[]
}

export default function ModalPeriodContent(props: PeriodModalProps) {
  const codPeriod: number = props.academicPeriods[0].TCAPERIODOSA_CODIGO
  const [matrix, setMatrix] = useState<Matrix>({
    TCAACTIVIDADESD_ID: null,
    TCAPERIODOSA_CODIGO: codPeriod,
    TCADOCENTES_ID_BANNER: props.idBanner,
    TCAFIRMASA_ID_BANNER: 1,
    TCAMATRICES_IMPARTIR_CLASE: null,
    TCAMATRICES_DOCENCIA: null,
    TCAMATRICES_INVESTIGACION: null,
    TCAMATRICES_GESTION_EDUCATIVA: null,
    TCAMATRICES_VINCULACION: null,
    TCAMATRICES_HORAS_EXC: null,
    TCAMATRICES_MOTIVO_HORAS_EXC: null,
  })
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center">
        Seleccionar Periodo Académico
      </h2>
      <div className="flex flex-col justify-center">
        <select
          className="my-3 py-1 rounded"
          value={matrix.TCAPERIODOSA_CODIGO}
          onChange={(e) =>
            setMatrix({
              ...matrix,
              TCAPERIODOSA_CODIGO: Number(e.target.value),
            })
          }
        >
          {props.academicPeriods.map((period) => (
            <option
              className="text-center"
              key={period.TCAPERIODOSA_CODIGO}
              value={period.TCAPERIODOSA_CODIGO}
            >
              {period.TCAPERIODOSA_DESCRIPCION}
            </option>
          ))}
        </select>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              createMatrix(matrix).then((state) => {
                if (state === 201) {
                  router.push('/matrix-record?idBanner=' + props.idBanner)
                }
              })
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
