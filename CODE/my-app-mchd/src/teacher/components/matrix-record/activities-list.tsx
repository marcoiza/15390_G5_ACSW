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
import { InitActivityOfMatrix } from '@/src/models/activities-of-matrix'
import { ActivityOfMatrix } from '@/app/actions'
import { calculatePercentageOfHours } from '@/src/libs/percentage-hour'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImgBtnSubmit } from '@/src/components/btn-submit'
import SectionContainer from '@/src/components/section-container'

function RowActivity(props: {
  readonly activities: TCAACTIVIDADES[]
  readonly setActivities: Dispatch<SetStateAction<TCAACTIVIDADES[]>>
  readonly activityOfMatrix?: ActivityOfMatrix
  readonly setActivitiesOfMatrix: Dispatch<SetStateAction<ActivityOfMatrix[]>>
  readonly setShowAddActivity?: Dispatch<SetStateAction<boolean>>
  readonly hoursForActivities: number
  readonly typeActivity: string
}) {
  const searchParams = useSearchParams()
  const { TCAACTIVIDADES, ...restActivityOfMatrix } =
    props.activityOfMatrix ??
    InitActivityOfMatrix(
      Number(searchParams.get('idMatrix')),
      props.activities.length > 0
        ? props.activities[0].TCAACTIVIDADES_CODIGO
        : ''
    )
  const { register, handleSubmit, formState, setValue, watch } =
    useForm<TCAACTIVIDADESD>({ defaultValues: restActivityOfMatrix })

  const onSubmit: SubmitHandler<TCAACTIVIDADESD> = (data) => {
    if (data.TCAACTIVIDADESD_ID === 0) {
      postActivityOfMatrix(data)
        .then((resData) => {
          props.setActivities(
            props.activities.filter((act) => {
              const isSameActivity =
                act.TCAACTIVIDADES_CODIGO !== data.TCAACTIVIDADES_CODIGO
              if (!isSameActivity)
                TCAACTIVIDADES.TCAACTIVIDADES_DESCRIPCION =
                  act.TCAACTIVIDADES_DESCRIPCION
              return isSameActivity
            })
          )
          props.setActivitiesOfMatrix((prev) =>
            prev.concat({ ...resData, TCAACTIVIDADES })
          )
          if (props.setShowAddActivity) {
            props.setShowAddActivity(false)
          }
        })
        .catch((err) => alert(err))
    } else {
      putActivityOfMatrix(data)
        .then((resData) => {
          props.setActivitiesOfMatrix((prev) =>
            prev
              .filter(
                (act) =>
                  act.TCAACTIVIDADES_CODIGO !== resData.TCAACTIVIDADES_CODIGO
              )
              .concat({ ...resData, TCAACTIVIDADES })
          )
        })
        .catch((err) => alert(err))
    }
  }

  const onDelete: SubmitHandler<TCAACTIVIDADESD> = (data) => {
    data.TCAACTIVIDADESD_ID = restActivityOfMatrix.TCAACTIVIDADESD_ID
    deleteActivityInMatrix(data.TCAACTIVIDADESD_ID)
      .then((_) => {
        props.setActivitiesOfMatrix((prev) =>
          prev.filter((a) => a.TCAACTIVIDADESD_ID !== data.TCAACTIVIDADESD_ID)
        )
        const deletedActivity: TCAACTIVIDADES = {
          TCAACTIVIDADES_CODIGO: data.TCAACTIVIDADES_CODIGO,
          TCAACTIVIDADES_TIPO: props.typeActivity,
          ...TCAACTIVIDADES,
        }
        props.setActivities((prev) => prev.concat(deletedActivity))
      })
      .catch((err) => alert(err))
  }

  function handleHoursChange(e: React.ChangeEvent<HTMLInputElement>) {
    const truncatedNumber = Math.floor(Number(e.target.value))
    setValue(
      'TCAACTIVIDADESD_HSP',
      calculatePercentageOfHours(truncatedNumber, props.hoursForActivities)
    )
  }

  return (
    <tr className="border-b-2">
      <td>
        {props.activityOfMatrix ? (
          <p>{TCAACTIVIDADES.TCAACTIVIDADES_DESCRIPCION}</p>
        ) : (
          <select
            form="activity-form"
            className="bg-white w-full"
            {...register('TCAACTIVIDADES_CODIGO', {
              onChange: (e) => {
                setValue('TCAACTIVIDADES_CODIGO', e.target.value)
              },
            })}
          >
            {props.activities.map((act) => (
              <option
                key={act.TCAACTIVIDADES_CODIGO}
                value={act.TCAACTIVIDADES_CODIGO}
              >
                {act.TCAACTIVIDADES_DESCRIPCION}
              </option>
            ))}
          </select>
        )}
      </td>
      <td>{watch('TCAACTIVIDADES_CODIGO')}</td>
      <td>
        <input
          className="text-center"
          form="activity-form"
          type="number"
          placeholder="Ingrese el número de horas"
          {...register('TCAACTIVIDADESD_HS', {
            value: props.activityOfMatrix?.TCAACTIVIDADESD_HS,
            valueAsNumber: true,
            required: true,
            onChange: handleHoursChange,
          })}
        />
      </td>
      <td>{watch('TCAACTIVIDADESD_HSP')}</td>
      <td className="flex flex-row justify-around">
        <form id="activity-form" onSubmit={handleSubmit(onSubmit)}>
          <ImgBtnSubmit
            pathImg="/save.svg"
            formState={formState}
            width={20}
            height={20}
            alt="Guardar actividad"
          />
        </form>
        <form onSubmit={handleSubmit(onDelete)}>
          {!TCAACTIVIDADES.TCAACTIVIDADES_OBLIGATORIA &&
            props.activityOfMatrix && (
              <ImgBtnSubmit
                pathImg="/delete.svg"
                formState={formState}
                width={23}
                height={23}
                alt="Eliminar actividad"
              />
            )}
        </form>
      </td>
    </tr>
  )
}

function TableActivities(props: {
  readonly title: string
  readonly activities: TCAACTIVIDADES[]
  readonly activitiesOfMatrix: ActivityOfMatrix[]
  readonly hoursForActivities: number
  readonly typeActivity: string
}) {
  const [activities, setActivities] = useState(props.activities)
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [activitiesOfMatrix, setActivitiesOfMatrix] = useState<
    ActivityOfMatrix[]
  >(props.activitiesOfMatrix)

  return (
    <>
      <table className="w-full text-center">
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
              activities={activities}
              setActivities={setActivities}
              activityOfMatrix={act}
              setActivitiesOfMatrix={setActivitiesOfMatrix}
              hoursForActivities={props.hoursForActivities}
              typeActivity={props.typeActivity}
            />
          ))}
          {showAddActivity && (
            <RowActivity
              activities={activities}
              setActivities={setActivities}
              setActivitiesOfMatrix={setActivitiesOfMatrix}
              setShowAddActivity={setShowAddActivity}
              hoursForActivities={props.hoursForActivities}
              typeActivity={props.typeActivity}
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
  readonly activities: TCAACTIVIDADES[]
  readonly docActivities: ActivityOfMatrix[]
  readonly invActivities: ActivityOfMatrix[]
  readonly gesActivities: ActivityOfMatrix[]
  readonly vinActivities: ActivityOfMatrix[]
  readonly hoursForActivities: number
}) {
  return (
    <SectionContainer title="Actividades">
      <TableActivities
        title="ACTIVIDADES DE DOCENCIA"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'doc'
        )}
        activitiesOfMatrix={props.docActivities}
        hoursForActivities={props.hoursForActivities}
        typeActivity="doc"
      />
      <TableActivities
        title="ACTIVIDADES DE INVESTIGACIÓN"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'inv'
        )}
        activitiesOfMatrix={props.invActivities}
        hoursForActivities={props.hoursForActivities}
        typeActivity="inv"
      />
      <TableActivities
        title="ACTIVIDADES DE GESTIÓN EDUCATIVA"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'ges'
        )}
        activitiesOfMatrix={props.gesActivities}
        hoursForActivities={props.hoursForActivities}
        typeActivity="ges"
      />
      <TableActivities
        title="ACTIVIDADES DE VINCULACIÓN CON LA SOCIEDAD"
        activities={props.activities.filter(
          (act) => act.TCAACTIVIDADES_TIPO === 'vin'
        )}
        activitiesOfMatrix={props.vinActivities}
        hoursForActivities={props.hoursForActivities}
        typeActivity="vin"
      />
    </SectionContainer>
  )
}
