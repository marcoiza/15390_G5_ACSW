import ModalTemplateImgBtn from '@/components/modal-template-img-btn'
import { timeEndFormat, timeStartFormat } from '@/src/libs/time-format'
import {
  postRowClassSchedule,
  putRowClassSchedule,
} from '@/src/utils/providers/class-schedule'
import { TCAHORARIOSC } from '@prisma/client'
import { useState } from 'react'

export default function ModalClassSchedule(props: {
  rowClassSchedule: TCAHORARIOSC
  setRowClassSchedule: (rowClassSchedule: TCAHORARIOSC) => void
  setClassSchedule: (classSchedule: TCAHORARIOSC[]) => void
  setShowAddRow: (showAddRow: boolean) => void
}) {
  const [classHours, setClassHours] = useState({
    mondayStart: timeStartFormat(props.rowClassSchedule.TCAHORARIOSC_LUNES),
    mondayEnd: timeEndFormat(props.rowClassSchedule.TCAHORARIOSC_LUNES),
    tuesdayStart: timeStartFormat(props.rowClassSchedule.TCAHORARIOSC_MARTES),
    tuesdayEnd: timeEndFormat(props.rowClassSchedule.TCAHORARIOSC_MARTES),
    wednesdayStart: timeStartFormat(
      props.rowClassSchedule.TCAHORARIOSC_MIERCOLES
    ),
    wednesdayEnd: timeEndFormat(props.rowClassSchedule.TCAHORARIOSC_MIERCOLES),
    thursdayStart: timeStartFormat(props.rowClassSchedule.TCAHORARIOSC_JUEVES),
    thursdayEnd: timeEndFormat(props.rowClassSchedule.TCAHORARIOSC_JUEVES),
    fridayStart: timeStartFormat(props.rowClassSchedule.TCAHORARIOSC_VIERNES),
    fridayEnd: timeEndFormat(props.rowClassSchedule.TCAHORARIOSC_VIERNES),
  })

  return (
    <ModalTemplateImgBtn
      textTitle="HORARIO"
      textSubtitle={props.rowClassSchedule.TCAHORARIOSC_ASIGNATURA ?? ''}
      imgPath="/open-modal.svg"
    >
      <div className="flex flex-col justify-center">
        <table className="text-center">
          <thead>
            <tr>
              <th>Día de Clase</th>
              <th>Hora Desde</th>
              <th>Hora Hasta</th>
              <th>Aula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lunes</td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.mondayStart}
                  onChange={(e) =>
                    setClassHours({
                      ...classHours,
                      mondayStart: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.mondayEnd}
                  onChange={(e) =>
                    setClassHours({ ...classHours, mondayEnd: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_AULA_LUNES ?? ''
                  }
                  onChange={(e) =>
                    props.setRowClassSchedule({
                      ...props.rowClassSchedule,
                      TCAHORARIOSC_AULA_LUNES: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.tuesdayStart}
                  onChange={(e) =>
                    setClassHours({
                      ...classHours,
                      tuesdayStart: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.tuesdayEnd}
                  onChange={(e) =>
                    setClassHours({ ...classHours, tuesdayEnd: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_AULA_MARTES ?? ''
                  }
                  onChange={(e) =>
                    props.setRowClassSchedule({
                      ...props.rowClassSchedule,
                      TCAHORARIOSC_AULA_MARTES: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.wednesdayStart}
                  onChange={(e) =>
                    setClassHours({
                      ...classHours,
                      wednesdayStart: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.wednesdayEnd}
                  onChange={(e) =>
                    setClassHours({
                      ...classHours,
                      wednesdayEnd: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_AULA_MIERCOLES ?? ''
                  }
                  onChange={(e) =>
                    props.setRowClassSchedule({
                      ...props.rowClassSchedule,
                      TCAHORARIOSC_AULA_MIERCOLES: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.thursdayStart}
                  onChange={(e) =>
                    setClassHours({
                      ...classHours,
                      thursdayStart: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.thursdayEnd}
                  onChange={(e) =>
                    setClassHours({
                      ...classHours,
                      thursdayEnd: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_AULA_JUEVES ?? ''
                  }
                  onChange={(e) =>
                    props.setRowClassSchedule({
                      ...props.rowClassSchedule,
                      TCAHORARIOSC_AULA_JUEVES: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.fridayStart}
                  onChange={(e) =>
                    setClassHours({
                      ...classHours,
                      fridayStart: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="time"
                  defaultValue={classHours.fridayEnd}
                  onChange={(e) =>
                    setClassHours({ ...classHours, fridayEnd: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_AULA_VIERNES ?? ''
                  }
                  onChange={(e) =>
                    props.setRowClassSchedule({
                      ...props.rowClassSchedule,
                      TCAHORARIOSC_AULA_VIERNES: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-evenly">
          <button className="border border-green-800 hover:bg-gray-300 text-green-800 font-bold py-2 px-4 rounded">
            Cancelar
          </button>
          <button
            className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              if (props.rowClassSchedule.TCAHORARIOSC_ID === 0) {
                postRowClassSchedule(props.rowClassSchedule, classHours).then(
                  (res) => {
                    if (res.status === 201) {
                      alert('Se ha guardado correctamente')
                      props.setClassSchedule(res.data)
                    } else {
                      alert('Ha ocurrido un error')
                    }
                  }
                )
              } else {
                putRowClassSchedule(props.rowClassSchedule, classHours).then(
                  (res) => {
                    if (res.status === 200) {
                      alert('Se ha guardado correctamente')
                      props.setClassSchedule(res.data)
                    } else {
                      alert('Ha ocurrido un error')
                    }
                  }
                )
              }
              props.setShowAddRow(false)
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </ModalTemplateImgBtn>
  )
}
