'use client'

import Image from 'next/image'
import { useState } from 'react'
import { TCAHORARIOST } from '@prisma/client'
import { saveRowWorkSchedule } from '@/src/utils/providers/work-schedule'
import { isHoursValid } from '@/src/utils/validations/work-schedule'

function BiometricOptions(props: {
  biometricEntry: string | null
  setBiometricEntry: (biometric: string) => void
  setBiometricExit: (biometric: string) => void
}) {
  return (
    <select
      className="bg-green-200"
      onChange={(e) => {
        props.setBiometricEntry(e.target.value)
        props.setBiometricExit(e.target.value)
      }}
    >
      <option value="fisico">Físico</option>
      <option value="virtual">Virtual</option>
      <option value="f-v">Físico Virtual</option>
    </select>
  )
}

function CellHour(props: {
  time: Date | null | undefined
  setTime: (time: Date | null) => void
}) {
  const hoursMorning = [
    '',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
  ]

  return (
    <div className="flex justify-center">
      <select
        className="bg-white"
        value={props.time ? props.time.toTimeString().slice(0, 5) : ''}
        onChange={(e) => {
          if (e.target.value !== '') {
            const timeParts = e.target.value.split(':')
            const date = new Date()
            date.setHours(Number(timeParts[0]), Number(timeParts[1]))
            props.setTime(date)
          } else {
            props.setTime(null)
          }
        }}
      >
        {hoursMorning.map((hour: string) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <button
        className="bg-green-700 rounded-md"
        onClick={() => {
          props.setTime(null)
        }}
      >
        <Image
          className="p-1"
          src="/delete.svg"
          alt="Biometrico"
          width={24}
          height={24}
        />
      </button>
    </div>
  )
}

export default function WorkSchedule(props: { workSchedule: TCAHORARIOST[] }) {
  const [morningEntry, setMorningEntry] = useState<TCAHORARIOST>(
    props.workSchedule[0]
  )
  const [morningExit, setMorningExit] = useState<TCAHORARIOST>(
    props.workSchedule[1]
  )
  const [afternoonEntry, setAfternoonEntry] = useState<TCAHORARIOST>(
    props.workSchedule[2]
  )
  const [afternoonExit, setAfternoonExit] = useState<TCAHORARIOST>(
    props.workSchedule[3]
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
            <th className="border border-green-600 bg-green-700 text-white">
              BIOMETRICO
            </th>
            <th className="border border-green-600 bg-green-200">LUNES</th>
            <th className="border border-green-600 bg-green-200">MARTES</th>
            <th className="border border-green-600 bg-green-200">MIERCOLES</th>
            <th className="border border-green-600 bg-green-200">JUEVES</th>
            <th className="border border-green-600 bg-green-200">VIERNES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              Matutina
            </td>
            <td className="border border-green-600 bg-green-200">Ingreso</td>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              <BiometricOptions
                biometricEntry={morningEntry.TCAHORARIOST_BIOMETRICO}
                setBiometricEntry={(biometric) => {
                  setMorningEntry({
                    ...morningEntry,
                    TCAHORARIOST_BIOMETRICO: biometric,
                  })
                }}
                setBiometricExit={(biometric) => {
                  setMorningExit({
                    ...morningExit,
                    TCAHORARIOST_BIOMETRICO: biometric,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningEntry.TCAHORARIOST_LUNES}
                setTime={(time) => {
                  setMorningEntry({ ...morningEntry, TCAHORARIOST_LUNES: time })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningEntry.TCAHORARIOST_MARTES}
                setTime={(time) => {
                  setMorningEntry({
                    ...morningEntry,
                    TCAHORARIOST_MARTES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningEntry.TCAHORARIOST_MIERCOLES}
                setTime={(time) => {
                  setMorningEntry({
                    ...morningEntry,
                    TCAHORARIOST_MIERCOLES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningEntry.TCAHORARIOST_JUEVES}
                setTime={(time) => {
                  setMorningEntry({
                    ...morningEntry,
                    TCAHORARIOST_JUEVES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningEntry.TCAHORARIOST_VIERNES}
                setTime={(time) => {
                  setMorningEntry({
                    ...morningEntry,
                    TCAHORARIOST_VIERNES: time,
                  })
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-200">Salida</td>
            <td className="border border-green-600">
              <CellHour
                time={morningExit.TCAHORARIOST_LUNES}
                setTime={(time) => {
                  setMorningExit({ ...morningExit, TCAHORARIOST_LUNES: time })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningExit.TCAHORARIOST_MARTES}
                setTime={(time) => {
                  setMorningExit({
                    ...morningExit,
                    TCAHORARIOST_MARTES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningExit.TCAHORARIOST_MIERCOLES}
                setTime={(time) => {
                  setMorningExit({
                    ...morningExit,
                    TCAHORARIOST_MIERCOLES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningExit.TCAHORARIOST_JUEVES}
                setTime={(time) => {
                  setMorningExit({
                    ...morningExit,
                    TCAHORARIOST_JUEVES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={morningExit.TCAHORARIOST_VIERNES}
                setTime={(time) => {
                  setMorningExit({
                    ...morningExit,
                    TCAHORARIOST_VIERNES: time,
                  })
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              Vespertina
            </td>
            <td className="border border-green-600 bg-green-200">Ingreso</td>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              <BiometricOptions
                biometricEntry={afternoonEntry.TCAHORARIOST_BIOMETRICO}
                setBiometricEntry={(biometric) => {
                  setAfternoonEntry({
                    ...afternoonEntry,
                    TCAHORARIOST_BIOMETRICO: biometric,
                  })
                }}
                setBiometricExit={(biometric) => {
                  setAfternoonExit({
                    ...afternoonExit,
                    TCAHORARIOST_BIOMETRICO: biometric,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonEntry.TCAHORARIOST_LUNES}
                setTime={(time) => {
                  setAfternoonEntry({
                    ...afternoonEntry,
                    TCAHORARIOST_LUNES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonEntry.TCAHORARIOST_MARTES}
                setTime={(time) => {
                  setAfternoonEntry({
                    ...afternoonEntry,
                    TCAHORARIOST_MARTES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonEntry.TCAHORARIOST_MIERCOLES}
                setTime={(time) => {
                  setAfternoonEntry({
                    ...afternoonEntry,
                    TCAHORARIOST_MIERCOLES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonEntry.TCAHORARIOST_JUEVES}
                setTime={(time) => {
                  setAfternoonEntry({
                    ...afternoonEntry,
                    TCAHORARIOST_JUEVES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonEntry.TCAHORARIOST_VIERNES}
                setTime={(time) => {
                  setAfternoonEntry({
                    ...afternoonEntry,
                    TCAHORARIOST_VIERNES: time,
                  })
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-200">Salida</td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonExit.TCAHORARIOST_LUNES}
                setTime={(time) => {
                  setAfternoonExit({
                    ...afternoonExit,
                    TCAHORARIOST_LUNES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonExit.TCAHORARIOST_MARTES}
                setTime={(time) => {
                  setAfternoonExit({
                    ...afternoonExit,
                    TCAHORARIOST_MARTES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonExit.TCAHORARIOST_MIERCOLES}
                setTime={(time) => {
                  setAfternoonExit({
                    ...afternoonExit,
                    TCAHORARIOST_MIERCOLES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonExit.TCAHORARIOST_JUEVES}
                setTime={(time) => {
                  setAfternoonExit({
                    ...afternoonExit,
                    TCAHORARIOST_JUEVES: time,
                  })
                }}
              />
            </td>
            <td className="border border-green-600">
              <CellHour
                time={afternoonExit.TCAHORARIOST_VIERNES}
                setTime={(time) => {
                  setAfternoonExit({
                    ...afternoonExit,
                    TCAHORARIOST_VIERNES: time,
                  })
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center py-5">
        <button
          className="bg-white py-1 px-4 rounded border border-black"
          onClick={() => {
            if (
              isHoursValid([
                morningEntry,
                morningExit,
                afternoonEntry,
                afternoonExit,
              ])
            ) {
              saveRowWorkSchedule([
                morningEntry,
                morningExit,
                afternoonEntry,
                afternoonExit,
              ]).then((res) => {
                if (res === 200) {
                  alert('Se ha guardado correctamente')
                } else {
                  alert('Ha ocurrido un error')
                }
              })
            } else {
              alert('Las horas no son validas')
            }
          }}
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  )
}
