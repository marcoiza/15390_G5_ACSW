'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { postMatrix } from '@/src/utils/providers/matrix'
import { InitialMatrix } from '@/src/models/matrix'
import { useForm } from 'react-hook-form'
import { SubmitBtn } from '@/components/customs/SubmitBtn'
import type { TCAMATRICES } from '@prisma/client'
import type { TCAPERIODOSA } from '@prisma/client'

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
  const { handleSubmit, formState } = useForm()

  function onSubmit() {
    postMatrix(matrix)
      .then((res) => {
        router.push(
          '/teacher/matrix-record?idBanner=' +
            props.idBanner +
            '&idMatrix=' +
            res.idMatrix
        )
      })
      .catch((err: Error) => {
        alert(err.message)
      })
  }

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-xl font-bold text-center">
        Seleccionar Periodo Académico
      </h3>
      <select
        className="my-3 py-2 rounded"
        onChange={(e) => {
          setMatrix({
            ...matrix,
            TCAPERIODOSA_CODIGO: Number(e.target.value),
          })
        }}
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
      <SubmitBtn textBtn="Continuar" formState={formState} />
    </form>
  )
}
