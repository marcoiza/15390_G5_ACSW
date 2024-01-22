'use client'

import { deleteRowClassSchedule } from '@/src/utils/providers/class-schedule'
import { TCAHORARIOSC } from '@prisma/client'
import Image from 'next/image'
import { useState } from 'react'
import ModalClassSchedule from './modal-class-schedule'

function RowClassSchedule(props: {
  idMatrix: number
  codPeriod: number
  rowClassSchedule?: TCAHORARIOSC
  setClassSchedule: (classSchedule: TCAHORARIOSC[]) => void
  setShowAddRow: (showAddRow: boolean) => void
}) {
  const [rowClassSchedule, setRowClassSchedule] = useState<TCAHORARIOSC>(
    props.rowClassSchedule ?? {
      TCAHORARIOSC_ID: 0,
      TCAMATRICES_ID: props.idMatrix,
      TCAHORARIOSC_COD_CARRERA: null,
      TCAHORARIOSC_PERIODO: props.codPeriod,
      TCAHORARIOSC_NRC: null,
      TCAHORARIOSC_ASIGNATURA: null,
      TCAHORARIOSC_TIPO: 'Clase',
      TCAHORARIOSC_LUNES: null,
      TCAHORARIOSC_AULA_LUNES: null,
      TCAHORARIOSC_MARTES: '',
      TCAHORARIOSC_AULA_MARTES: null,
      TCAHORARIOSC_MIERCOLES: null,
      TCAHORARIOSC_AULA_MIERCOLES: null,
      TCAHORARIOSC_JUEVES: null,
      TCAHORARIOSC_AULA_JUEVES: null,
      TCAHORARIOSC_VIERNES: null,
      TCAHORARIOSC_AULA_VIERNES: null,
    }
  )

  return (
    <tr>
      <td className="border border-green-600">
        <input
          className="text-center"
          type="text"
          defaultValue={rowClassSchedule.TCAHORARIOSC_COD_CARRERA ?? ''}
          placeholder="Ingrese el código de carrera"
          onChange={(e) =>
            setRowClassSchedule({
              ...rowClassSchedule,
              TCAHORARIOSC_COD_CARRERA: e.target.value,
            })
          }
        />
      </td>
      <td className="border border-green-600">
        <input
          className="text-center"
          defaultValue={rowClassSchedule.TCAHORARIOSC_PERIODO ?? ''}
        />
      </td>
      <td className="border border-green-600">
        <input
          className="text-center"
          type="text"
          defaultValue={rowClassSchedule.TCAHORARIOSC_NRC ?? ''}
          placeholder="Ingrese el NRC"
          onChange={(e) =>
            setRowClassSchedule({
              ...rowClassSchedule,
              TCAHORARIOSC_NRC: Number(e.target.value),
            })
          }
        />
      </td>
      <td className="border border-green-600">
        <input
          className="text-center"
          type="text"
          defaultValue={rowClassSchedule.TCAHORARIOSC_ASIGNATURA ?? ''}
          placeholder="Ingrese la asignatura"
          onChange={(e) =>
            setRowClassSchedule({
              ...rowClassSchedule,
              TCAHORARIOSC_ASIGNATURA: e.target.value,
            })
          }
        />
      </td>
      <td className="border border-green-600">
        <select
          className="bg-white"
          defaultValue={rowClassSchedule.TCAHORARIOSC_TIPO ?? 'Clase'}
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
      <td className="border border-green-600">
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
      <table className="mx-auto size-3/4 border-collapse text-center border border-green-600">
        <thead>
          <tr>
            <th className="border border-green-600 bg-green-700 text-white">
              CÓDIGO DE CARREARA
            </th>
            <th className="border border-green-600 bg-green-700 text-white">
              PERIODO
            </th>
            <th className="border border-green-600 bg-green-700 text-white">
              NRC
            </th>
            <th className="border border-green-600 bg-green-700 text-white">
              ASIGNATURA
            </th>
            <th className="border border-green-600 bg-green-700 text-white"></th>
            <th className="border border-green-600 bg-green-700 text-white">
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
      <div className="flex justify-center py-5">
        <button
          className="bg-gray-200 rounded-full"
          onClick={() => setShowAddRow(!showAddRow)}
        >
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
