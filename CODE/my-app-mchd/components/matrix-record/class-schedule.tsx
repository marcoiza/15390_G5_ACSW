'use client'

import { deleteRowClassSchedule } from '@/src/utils/providers/class-schedule'
import { TCAHORARIOSC } from '@prisma/client'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import ModalClassSchedule from './modal-class-schedule'
import { InitClassScheduleService } from '@/src/models/class-schedule'

function RowClassSchedule(props: {
  idMatrix: number
  codPeriod: number
  rowClassSchedule?: TCAHORARIOSC
  setClassSchedule: Dispatch<SetStateAction<TCAHORARIOSC[]>>
  setShowAddRow: Dispatch<SetStateAction<boolean>>
}) {
  const [rowClassSchedule, setRowClassSchedule] = useState<TCAHORARIOSC>(
    props.rowClassSchedule ??
      InitClassScheduleService(props.idMatrix, props.codPeriod)
  )

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setRowClassSchedule((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <tr>
      <td className="border border-green-600 w-1/6">
        <input
          className="text-center"
          type="text"
          name="TCAHORARIOSC_COD_CARRERA"
          value={rowClassSchedule.TCAHORARIOSC_COD_CARRERA ?? ''}
          placeholder="Ingrese el código"
          onChange={handleInputChange}
          required
        />
      </td>
      <td className="border border-green-600 w-1/6">
        <input
          className="text-center"
          defaultValue={rowClassSchedule.TCAHORARIOSC_PERIODO ?? ''}
          readOnly
        />
      </td>
      <td className="border border-green-600 w-1/6">
        <input
          className="text-center"
          type="number"
          name="TCAHORARIOSC_NRC"
          value={rowClassSchedule.TCAHORARIOSC_NRC ?? ''}
          placeholder="Ingrese el NRC"
          onChange={(e) =>
            setRowClassSchedule({
              ...rowClassSchedule,
              TCAHORARIOSC_NRC: Number(e.target.value),
            })
          }
          required
        />
      </td>
      <td className="border border-green-600 w-1/6">
        <input
          className="text-center"
          type="text"
          name="TCAHORARIOSC_ASIGNATURA"
          value={rowClassSchedule.TCAHORARIOSC_ASIGNATURA ?? ''}
          placeholder="Ingrese la asignatura"
          onChange={handleInputChange}
          required
        />
      </td>
      <td className="border border-green-600 w-1/6">
        <select
          className="bg-white"
          value={rowClassSchedule.TCAHORARIOSC_TIPO ?? 'Clase'}
          onChange={(e) =>
            setRowClassSchedule({
              ...rowClassSchedule,
              TCAHORARIOSC_TIPO: e.target.value,
            })
          }
        >
          <option value={'Clase'}>CLASE</option>
          <option value={'Tutoría'}>TUTORÍA</option>
        </select>
      </td>
      <td className="border border-green-600 w-1/6">
        <ModalClassSchedule
          rowClassSchedule={rowClassSchedule}
          setRowClassSchedule={setRowClassSchedule}
          setClassSchedule={props.setClassSchedule}
          setShowAddRow={props.setShowAddRow}
        />
        {rowClassSchedule.TCAHORARIOSC_ID !== 0 && (
          <button
            className="bg-green-700 rounded-md"
            onClick={() =>
              deleteRowClassSchedule(rowClassSchedule.TCAHORARIOSC_ID).then(
                (res) => {
                  if (res.status === 200) {
                    props.setClassSchedule(res.data)
                  }
                }
              )
            }
          >
            <Image
              className="p-1"
              src="/delete.svg"
              alt="delete row"
              width={24}
              height={24}
            />
          </button>
        )}
      </td>
    </tr>
  )
}

export default function ClassSchedule(props: {
  idMatrix: number
  codPeriod: number
  classSchedule: TCAHORARIOSC[]
}) {
  const [classSchedule, setClassSchedule] = useState<TCAHORARIOSC[]>(
    props.classSchedule
  )
  const [showAddRow, setShowAddRow] = useState(false)

  return (
    <div>
      <h2 className="text-3xl font-bold px-10 py-5">Horario de clases</h2>
      {/* <form id="class-schedule-form"> */}
      <table className="mx-auto size-3/4 border-collapse text-center border border-green-600">
        <thead>
          <tr>
            <th className="border border-green-600 bg-green-700 text-white w-1/6">
              CÓDIGO DE CARREARA
            </th>
            <th className="border border-green-600 bg-green-700 text-white w-1/6">
              PERIODO
            </th>
            <th className="border border-green-600 bg-green-700 text-white w-1/6">
              NRC
            </th>
            <th className="border border-green-600 bg-green-700 text-white w-1/6">
              ASIGNATURA
            </th>
            <th className="border border-green-600 bg-green-700 text-white w-1/6"></th>
            <th className="border border-green-600 bg-green-700 text-white w-1/6">
              HORARIO
            </th>
          </tr>
        </thead>
        <tbody>
          {classSchedule.map((rowClassSchedule) => (
            <RowClassSchedule
              key={rowClassSchedule.TCAHORARIOSC_ID}
              idMatrix={props.idMatrix}
              codPeriod={props.codPeriod}
              rowClassSchedule={rowClassSchedule}
              setClassSchedule={setClassSchedule}
              setShowAddRow={setShowAddRow}
            />
          ))}
          {showAddRow && (
            <RowClassSchedule
              idMatrix={props.idMatrix}
              codPeriod={props.codPeriod}
              setClassSchedule={setClassSchedule}
              setShowAddRow={setShowAddRow}
            />
          )}
        </tbody>
      </table>
      {/* </form> */}
      <div className="flex justify-center py-5">
        <button className="btn-add" onClick={() => setShowAddRow(!showAddRow)}>
          {
            <Image
              className="p-1"
              src={!showAddRow ? '/add.svg' : '/close.svg'}
              alt="Agregar"
              width={35}
              height={35}
            />
          }
        </button>
      </div>
    </div>
  )
}
