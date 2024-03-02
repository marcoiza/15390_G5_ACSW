'use client'

import { TCAHORARIOST } from '@prisma/client'
import { saveRowWorkSchedule } from '@/src/utils/providers/teacher/work-schedule'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BtnSubmit } from '@/src/components/btn-submit'
import { Days } from '@/src/models/work-schedule'
import ModalTemplateImgBtn from '@/src/components/modal-template-img-btn'

function CellDay(props: {
  readonly workSchedule: TCAHORARIOST
  readonly day: Days
  readonly setRowWorkSchedule: Dispatch<SetStateAction<TCAHORARIOST>>
}) {
  const [showModal, setShowModal] = useState(false)
  const { register, handleSubmit, formState } = useForm<TCAHORARIOST>()
  const onSubmit: SubmitHandler<TCAHORARIOST> = (data) => {
    saveRowWorkSchedule(data)
      .then((res) => {
        alert('Guardado')
        props.setRowWorkSchedule(res)
        setShowModal(false)
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <>
      <div>
        <p>{props.workSchedule[`TCAHORARIOST_${props.day}_INGRESO`]}</p>
        <p>{props.workSchedule[`TCAHORARIOST_${props.day}_SALIDA`]}</p>
        <p>{props.workSchedule[`TCAHORARIOST_${props.day}_BIOMETRICO`]}</p>
      </div>
      <ModalTemplateImgBtn
        imgPath="/open-modal.svg"
        textTitle={props.day}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row">
            <div className="mx-auto justify-center w-1/2">
              <h3>Horario</h3>
              <input
                {...register('TCAHORARIOST_ID', {
                  value: props.workSchedule.TCAHORARIOST_ID,
                })}
                hidden
              />
              <label htmlFor="entry">Ingreso: </label>
              <input
                id="entry"
                {...register(`TCAHORARIOST_${props.day}_INGRESO`, {
                  value:
                    props.workSchedule[`TCAHORARIOST_${props.day}_INGRESO`],
                  required: true,
                })}
                type="time"
              />
              <br />
              <label htmlFor="exit">Salida: </label>
              <input
                id="exit"
                {...register(`TCAHORARIOST_${props.day}_SALIDA`, {
                  value: props.workSchedule[`TCAHORARIOST_${props.day}_SALIDA`],
                  required: true,
                })}
                type="time"
              />
            </div>
            <div className="mx-auto w-1/2 space-x-1">
              <h3>Biometrico</h3>
              <label htmlFor="F">Físico:</label>
              <input
                id="F"
                type="radio"
                {...register(`TCAHORARIOST_${props.day}_BIOMETRICO`)}
                value={'F'}
              />
              <label htmlFor="V">Virtual:</label>
              <input
                id="V"
                type="radio"
                {...register(`TCAHORARIOST_${props.day}_BIOMETRICO`)}
                value={'V'}
              />
              <label htmlFor="H">Híbrido</label>
              <input
                id="H"
                type="radio"
                {...register(`TCAHORARIOST_${props.day}_BIOMETRICO`)}
                value={'H'}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <BtnSubmit textBtn="Guardar" formState={formState} />
          </div>
        </form>
      </ModalTemplateImgBtn>
    </>
  )
}

export default function WorkSchedule(props: {
  readonly workSchedule: TCAHORARIOST[]
}) {
  const [morning, setMorning] = useState<TCAHORARIOST>(props.workSchedule[0])
  const [afternoon, setAfternoon] = useState<TCAHORARIOST>(
    props.workSchedule[1]
  )

  return (
    <div>
      <h2 className="text-3xl font-bold px-10 py-5">Horario de trabajo</h2>
      <table className="mx-auto size-3/4 border-collapse text-center border border-green-600">
        <thead>
          <tr>
            <th className="border border-green-600 bg-green-700 text-white">
              JORANADA
            </th>
            <th className="border border-green-600 bg-green-700 text-white">
              REGISTRO
            </th>
            <th className="w-1/6 border border-green-600 bg-green-200">
              LUNES
            </th>
            <th className="w-1/6 border border-green-600 bg-green-200">
              MARTES
            </th>
            <th className="w-1/6 border border-green-600 bg-green-200">
              MIERCOLES
            </th>
            <th className="w-1/6 border border-green-600 bg-green-200">
              JUEVES
            </th>
            <th className="w-1/6 border border-green-600 bg-green-200">
              VIERNES
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-600 bg-green-200">Matutina</td>
            <td className="h-full items-start border border-green-600 bg-green-200">
              <p>Ingreso</p>
              <p>Salida</p>
              <p>Biometrico</p>
              <p></p>
            </td>
            <td className="border border-green-600">
              <CellDay
                day="LUNES"
                workSchedule={morning}
                setRowWorkSchedule={setMorning}
              />
            </td>
            <td className="border border-green-600">
              <CellDay
                day="MARTES"
                workSchedule={morning}
                setRowWorkSchedule={setMorning}
              />
            </td>
            <td className="border border-green-600">
              <CellDay
                day="MIERCOLES"
                workSchedule={morning}
                setRowWorkSchedule={setMorning}
              />
            </td>
            <td className="border border-green-600">
              <CellDay
                day="JUEVES"
                workSchedule={morning}
                setRowWorkSchedule={setMorning}
              />
            </td>

            <td className="border border-green-600">
              <CellDay
                day="VIERNES"
                workSchedule={morning}
                setRowWorkSchedule={setMorning}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-200">Vespertina</td>
            <td className="h-full border border-green-600 bg-green-200">
              <p>Ingreso</p>
              <p>Salida</p>
              <p>Biometrico</p>
              <p></p>
            </td>
            <td className="border border-green-600">
              <CellDay
                day="LUNES"
                workSchedule={afternoon}
                setRowWorkSchedule={setAfternoon}
              />
            </td>
            <td className="border border-green-600">
              <CellDay
                day="MARTES"
                workSchedule={afternoon}
                setRowWorkSchedule={setAfternoon}
              />
            </td>
            <td className="border border-green-600">
              <CellDay
                day="MIERCOLES"
                workSchedule={afternoon}
                setRowWorkSchedule={setAfternoon}
              />
            </td>
            <td className="border border-green-600">
              <CellDay
                day="JUEVES"
                workSchedule={afternoon}
                setRowWorkSchedule={setAfternoon}
              />
            </td>
            <td className="border border-green-600">
              <CellDay
                day="VIERNES"
                workSchedule={afternoon}
                setRowWorkSchedule={setAfternoon}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
