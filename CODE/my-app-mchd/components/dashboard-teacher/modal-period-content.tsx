'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { TCAPERIODOSA } from '@prisma/client'
import type { TCAMATRICES } from '@prisma/client'
import { postMatrix } from '@/src/utils/providers/matrix'

interface PeriodModalProps {
  idBanner: string
  academicPeriods: TCAPERIODOSA[]
}

export default function ModalPeriodContent(props: PeriodModalProps) {
  const codPeriod: number = props.academicPeriods[0].TCAPERIODOSA_CODIGO
  const [matrix, setMatrix] = useState<TCAMATRICES>({
    TCAMATRICES_ID: 0,
    TCAPERIODOSA_CODIGO: codPeriod,
    TCADOCENTES_ID_BANNER: props.idBanner,
    TCAFIRMASA_ID_BANNER: '1',
    TCAMATRICES_IMPARTIR_CLASE: null,
    TCAMATRICES_DOCENCIA: null,
    TCAMATRICES_INVESTIGACION: null,
    TCAMATRICES_GESTION_EDUCATIVA: null,
    TCAMATRICES_VINCULACION: null,
    TCAMATRICES_HORAS_EXC: null,
    TCAMATRICES_MOTIVO_HORAS_EXC: null,
    TCAMATRICES_FECHA_CREACION: new Date(),
    TCAMATRICES_FECHA_ACTUALIZACION: new Date(),
  })
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-xl font-bold text-center">
        Seleccionar Periodo Académico
      </h3>
      <div className="flex flex-col justify-center">
        <select
          className="my-3 py-1 rounded"
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
              {period.TCAPERIODOSA_CODIGO +
                ' - ' +
                period.TCAPERIODOSA_DESCRIPCION}
            </option>
          ))}
        </select>
        <div className="flex justify-center">
          <button
            className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              postMatrix(matrix)
                .then((res) => {
                  if (res.status === 201) {
                    router.push(
                      '/matrix-record?idBanner=' +
                        props.idBanner +
                        '&idMatrix=' +
                        res.idMatrix
                    )
                  }
                })
                .catch((err) => {
                  console.log(err)
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
