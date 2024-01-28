'use client'

import Image from 'next/image'
import type { TCAACTIVIDADES, TCAACTIVIDADESD } from '@prisma/client'
import { useState } from 'react'
import {
  addActivityInMatrix,
  deleteActivityInMatrix,
  updateActivityInMatrix,
} from '@/src/utils/providers/activities'
import { useSearchParams } from 'next/navigation'

function RowActivity(props: {
  typeAct: string
  activity?: TCAACTIVIDADESD
  activities: TCAACTIVIDADES[]
  setActsByMatrix: React.Dispatch<React.SetStateAction<TCAACTIVIDADESD[]>>
  setShowAddActivity?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const searchParams = useSearchParams()
  const [activity, setActivity] = useState<TCAACTIVIDADESD>(
    props.activity ?? {
      TCAACTIVIDADESD_ID: 0,
      TCAMATRICES_ID: Number(searchParams.get('idMatrix')),
      TCAACTIVIDADES_CODIGO: '',
      TCAACTIVIDADESD_HS: null,
      TCAACTIVIDADESD_HSP: null,
    }
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setActivity({ ...activity, [name]: Number(value) })
  }

  const handleSubmit = () => {
    if (activity.TCAACTIVIDADESD_ID === 0) {
      addActivityInMatrix(activity).then((res) => {
        if (res.status === 201) {
          props.setActsByMatrix(res.data)
          if (props.setShowAddActivity) {
            props.setShowAddActivity(false)
          }
        }
      })
    } else {
      updateActivityInMatrix(activity).then((res) => {
        if (res.status === 200) {
          props.setActsByMatrix(res.data)
        }
      })
    }
  }

  return (
    <tr>
      <td>
        <select
          className="bg-white w-full"
          value={activity.TCAACTIVIDADES_CODIGO ?? ''}
          onChange={(e) =>
            setActivity({
              ...activity,
              TCAACTIVIDADES_CODIGO: e.target.value,
            })
          }
        >
          {props.activities.map((act) => (
            <option
              key={act.TCAACTIVIDADES_CODIGO}
              value={act.TCAACTIVIDADES_CODIGO ?? ''}
            >
              {act.TCAACTIVIDADES_DESCRIPCION}
            </option>
          ))}
        </select>
      </td>
      <td>{activity.TCAACTIVIDADES_CODIGO ?? ''}</td>
      <td>
        <input
          type="text"
          name="TCAACTIVIDADESD_HS"
          defaultValue={activity.TCAACTIVIDADESD_HS ?? ''}
          placeholder="Ingrese el número de horas"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="TCAACTIVIDADESD_HSP"
          defaultValue={activity.TCAACTIVIDADESD_HSP ?? ''}
          placeholder="Ingrese el porcentaje de horas"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <button onClick={handleSubmit}>
          <Image
            className="p-1"
            src="/save.svg"
            alt="Guardar"
            width={24}
            height={24}
          />
        </button>
        {props.activity && (
          <button
            className="bg-green-700 rounded-md"
            onClick={() =>
              deleteActivityInMatrix(activity.TCAACTIVIDADESD_ID).then(
                (res) => {
                  if (res.status === 200) {
                    props.setActsByMatrix(res.data)
                  }
                }
              )
            }
          >
            <Image
              className="p-1"
              src="/delete.svg"
              alt="Eliminar"
              width={24}
              height={24}
            />
          </button>
        )}
      </td>
    </tr>
  )
}

function TableActivities(props: {
  title: string
  typeAct: string
  activities: TCAACTIVIDADES[]
  actsByMatrix: TCAACTIVIDADESD[]
}) {
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [actsByMatrix, setActsByMatrix] = useState<TCAACTIVIDADESD[]>(
    props.actsByMatrix
  )

  return (
    <div>
      <table className="mx-auto size-3/4 text-center">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="w-8/12">{props.title}</th>
            <th className="w-1/12">ACT</th>
            <th className="w-1/12">HS</th>
            <th className="w-1/12">HS%</th>
            <th className="w-1/12"></th>
          </tr>
        </thead>
        <tbody>
          {actsByMatrix.map((act) => (
            <RowActivity
              key={act.TCAACTIVIDADES_CODIGO}
              typeAct={props.typeAct}
              activity={act}
              activities={props.activities}
              setActsByMatrix={setActsByMatrix}
            />
          ))}
          {showAddActivity && (
            <RowActivity
              typeAct={props.typeAct}
              activities={props.activities}
              setActsByMatrix={setActsByMatrix}
              setShowAddActivity={setShowAddActivity}
            />
          )}
        </tbody>
      </table>
      <div className="flex justify-center py-5">
        <button
          className="bg-gray-200 rounded-full"
          onClick={() => setShowAddActivity(!showAddActivity)}
        >
          <Image
            className="p-1"
            src={!showAddActivity ? '/add.svg' : '/close.svg'}
            alt="Agregar"
            width={35}
            height={35}
          />
        </button>
      </div>
    </div>
  )
}

export default function ActivitiesList(props: {
  activities: TCAACTIVIDADES[]
  docActivities: TCAACTIVIDADESD[]
  invActivities: TCAACTIVIDADESD[]
  gesActivities: TCAACTIVIDADESD[]
  vinActivities: TCAACTIVIDADESD[]
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold px-10 py-5">Actividades</h2>
      <TableActivities
        title="ACTIVIDADES DE DOCENCIA"
        typeAct="doc"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'doc'
        )}
        actsByMatrix={props.docActivities}
      />
      <TableActivities
        title="ACTIVIDADES DE INVESTIGACIÓN"
        typeAct="inv"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'inv'
        )}
        actsByMatrix={props.invActivities}
      />
      <TableActivities
        title="ACTIVIDADES DE GESTIÓN EDUCATIVA"
        typeAct="ges"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'ges'
        )}
        actsByMatrix={props.gesActivities}
      />
      <TableActivities
        title="ACTIVIDADES DE VINCULACIÓN CON LA SOCIEDAD"
        typeAct="vin"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'vin'
        )}
        actsByMatrix={props.vinActivities}
      />
    </div>
  )
}
