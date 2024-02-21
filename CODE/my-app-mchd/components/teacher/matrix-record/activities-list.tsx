'use client'

import Image from 'next/image'
import type { TCAACTIVIDADES, TCAACTIVIDADESD } from '@prisma/client'
import { Dispatch, SetStateAction, useState } from 'react'
import {
  postActivityOfMatrix,
  deleteActivityInMatrix,
  putActivityOfMatrix,
} from '@/src/utils/providers/teacher/activities-of-matrix'
import { useSearchParams } from 'next/navigation'
import { initActivityOfMatrix } from '@/src/models/activities-of-matrix'
import { ActivityOfMatrix } from '@/app/actions'
import { calculatePercentageOfHours } from '@/src/libs/porcentaje-hour'

function RowActivity(props: {
  activityOfMatrix?: ActivityOfMatrix
  activities: TCAACTIVIDADES[]
  setActivities: Dispatch<SetStateAction<TCAACTIVIDADES[]>>
  setActivitiesOfMatrix: Dispatch<SetStateAction<ActivityOfMatrix[]>>
  setShowAddActivity?: Dispatch<SetStateAction<boolean>>
  hoursForActivities: number
}) {
  const searchParams = useSearchParams()
  const { TCAACTIVIDADES, ...restActivityOfMatrix } =
    props.activityOfMatrix ??
    initActivityOfMatrix(
      Number(searchParams.get('idMatrix')),
      props.activities.length > 0
        ? props.activities[0].TCAACTIVIDADES_CODIGO
        : ''
    )
  const [activityOfMatrix, setActivityOfMatrix] =
    useState<TCAACTIVIDADESD>(restActivityOfMatrix)
  const [activity, setActivity] = useState(TCAACTIVIDADES)

  function handleSubmit() {
    if (activityOfMatrix.TCAACTIVIDADESD_ID === 0) {
      //TODO: fix this, the name of activity don't show in the activity row after post activity
      postActivityOfMatrix(activityOfMatrix)
        .then((data) => {
          props.setActivitiesOfMatrix((prev) =>
            prev.concat({ ...data, TCAACTIVIDADES })
          )
          props.setActivities(
            props.activities.filter(
              (act) =>
                act.TCAACTIVIDADES_CODIGO !==
                activityOfMatrix.TCAACTIVIDADES_CODIGO
            )
          )
          if (props.setShowAddActivity) {
            props.setShowAddActivity(false)
          }
        })
        .catch((err) => alert(err))
    } else {
      putActivityOfMatrix(activityOfMatrix)
        .then((data) => {
          props.setActivitiesOfMatrix((prev) =>
            prev
              .filter(
                (a) => a.TCAACTIVIDADES_CODIGO !== data.TCAACTIVIDADES_CODIGO
              )
              .concat({ ...data, TCAACTIVIDADES })
          )
          setActivityOfMatrix(data)
        })
        .catch((err) => alert(err))
    }
  }

  function handleDelete() {
    deleteActivityInMatrix(activityOfMatrix.TCAACTIVIDADESD_ID)
      .then((_) => {
        props.setActivitiesOfMatrix((prev) =>
          prev.filter(
            (a) => a.TCAACTIVIDADESD_ID !== activityOfMatrix.TCAACTIVIDADESD_ID
          )
        )
        //TODO: add activity after delete
        // props.setActivities((prev) => prev.concat(activity))
      })
      .catch((err) => alert(err))
  }

  function handleHoursChange(e: React.ChangeEvent<HTMLInputElement>) {
    const truncatedNumber = Math.floor(Number(e.target.value))
    setActivityOfMatrix({
      ...activityOfMatrix,
      TCAACTIVIDADESD_HS: truncatedNumber,
      TCAACTIVIDADESD_HSP: calculatePercentageOfHours(
        truncatedNumber,
        props.hoursForActivities
      ),
    })
  }

  return (
    <tr>
      <td>
        {props.activityOfMatrix ? (
          <p>{TCAACTIVIDADES.TCAACTIVIDADES_DESCRIPCION}</p>
        ) : (
          <select
            className="bg-white w-full"
            value={activityOfMatrix.TCAACTIVIDADES_CODIGO ?? ''}
            onChange={(e) =>
              setActivityOfMatrix({
                ...activityOfMatrix,
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
        )}
      </td>
      <td>{activityOfMatrix.TCAACTIVIDADES_CODIGO ?? ''}</td>
      <td>
        <input
          className="text-center"
          type="number"
          value={activityOfMatrix.TCAACTIVIDADESD_HS ?? ''}
          placeholder="Ingrese el número de horas"
          onChange={handleHoursChange}
          required
        />
      </td>
      <td>
        <p>{activityOfMatrix.TCAACTIVIDADESD_HSP}%</p>
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
        {!TCAACTIVIDADES.TCAACTIVIDADES_OBLIGATORIA &&
          props.activityOfMatrix && (
            <button className="bg-green-700 rounded-md" onClick={handleDelete}>
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
  activities: TCAACTIVIDADES[]
  activitiesOfMatrix: ActivityOfMatrix[]
  hoursForActivities: number
  setHoursForActivities: Dispatch<SetStateAction<number>>
}) {
  const [activities, setActivities] = useState(props.activities)
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [activitiesOfMatrix, setActivitiesOfMatrix] = useState<
    ActivityOfMatrix[]
  >(props.activitiesOfMatrix)

  return (
    <>
      <table className="mx-auto w-3/4 text-center">
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
          {activitiesOfMatrix.map((act) => (
            <RowActivity
              key={act.TCAACTIVIDADES_CODIGO}
              activityOfMatrix={act}
              activities={activities}
              setActivities={setActivities}
              setActivitiesOfMatrix={setActivitiesOfMatrix}
              hoursForActivities={props.hoursForActivities}
            />
          ))}
          {showAddActivity && (
            <RowActivity
              activities={activities}
              setActivities={setActivities}
              setActivitiesOfMatrix={setActivitiesOfMatrix}
              setShowAddActivity={setShowAddActivity}
              hoursForActivities={props.hoursForActivities}
            />
          )}
        </tbody>
      </table>
      <div className="flex justify-center py-5">
        {props.activities.length > 0 && (
          <button
            className="btn-add"
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
        )}
      </div>
    </>
  )
}

export default function ActivitiesList(props: {
  activities: TCAACTIVIDADES[]
  docActivities: ActivityOfMatrix[]
  invActivities: ActivityOfMatrix[]
  gesActivities: ActivityOfMatrix[]
  vinActivities: ActivityOfMatrix[]
  hoursForActivities: number
}) {
  const [hoursForActivities, setHoursForActivities] = useState(
    props.hoursForActivities
  )

  return (
    <>
      <h2 className="text-3xl font-bold px-10 py-5">Actividades</h2>
      <TableActivities
        title="ACTIVIDADES DE DOCENCIA"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'doc'
        )}
        activitiesOfMatrix={props.docActivities}
        hoursForActivities={hoursForActivities}
        setHoursForActivities={setHoursForActivities}
      />
      <TableActivities
        title="ACTIVIDADES DE INVESTIGACIÓN"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'inv'
        )}
        activitiesOfMatrix={props.invActivities}
        hoursForActivities={hoursForActivities}
        setHoursForActivities={setHoursForActivities}
      />
      <TableActivities
        title="ACTIVIDADES DE GESTIÓN EDUCATIVA"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'ges'
        )}
        activitiesOfMatrix={props.gesActivities}
        hoursForActivities={hoursForActivities}
        setHoursForActivities={setHoursForActivities}
      />
      <TableActivities
        title="ACTIVIDADES DE VINCULACIÓN CON LA SOCIEDAD"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'vin'
        )}
        activitiesOfMatrix={props.vinActivities}
        hoursForActivities={hoursForActivities}
        setHoursForActivities={setHoursForActivities}
      />
    </>
  )
}
