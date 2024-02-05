import ModalTemplateImgBtn from '@/components/modal-template-img-btn'
import { getTimeEndFormat, getTimeStartFormat } from '@/src/libs/time-format'
import {
  postRowClassSchedule,
  putRowClassSchedule,
} from '@/src/utils/providers/class-schedule'
import { TCAHORARIOSC } from '@prisma/client'
import { Dispatch, SetStateAction, useState } from 'react'

interface ModalClassScheduleProps {
  rowClassSchedule: TCAHORARIOSC
  setRowClassSchedule: Dispatch<SetStateAction<TCAHORARIOSC>>
  setClassSchedule: Dispatch<SetStateAction<TCAHORARIOSC[]>>
  setShowAddRow: Dispatch<SetStateAction<boolean>>
}

export default function ModalClassSchedule(props: ModalClassScheduleProps) {
  const [classHours, setClassHours] = useState({
    mondayStart: getTimeStartFormat(props.rowClassSchedule.TCAHORARIOSC_LUNES),
    mondayEnd: getTimeEndFormat(props.rowClassSchedule.TCAHORARIOSC_LUNES),
    tuesdayStart: getTimeStartFormat(props.rowClassSchedule.TCAHORARIOSC_MARTES),
    tuesdayEnd: getTimeEndFormat(props.rowClassSchedule.TCAHORARIOSC_MARTES),
    wednesdayStart: getTimeStartFormat(
      props.rowClassSchedule.TCAHORARIOSC_MIERCOLES
    ),
    wednesdayEnd: getTimeEndFormat(props.rowClassSchedule.TCAHORARIOSC_MIERCOLES),
    thursdayStart: getTimeStartFormat(props.rowClassSchedule.TCAHORARIOSC_JUEVES),
    thursdayEnd: getTimeEndFormat(props.rowClassSchedule.TCAHORARIOSC_JUEVES),
    fridayStart: getTimeStartFormat(props.rowClassSchedule.TCAHORARIOSC_VIERNES),
    fridayEnd: getTimeEndFormat(props.rowClassSchedule.TCAHORARIOSC_VIERNES),
  })

  const [showModal, setShowModal] = useState(false)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setClassHours((prev) => ({ ...prev, [name]: value }))
  }

  function handleInputChangeRCS(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    props.setRowClassSchedule((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <ModalTemplateImgBtn
      textTitle="HORARIO"
      textSubtitle={props.rowClassSchedule.TCAHORARIOSC_ASIGNATURA ?? ''}
      imgPath="/open-modal.svg"
      showModal={showModal}
      setShowModal={setShowModal}
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
                  name="mondayStart"
                  defaultValue={classHours.mondayStart}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="mondayEnd"
                  defaultValue={classHours.mondayEnd}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_LUNES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_LUNES ?? ''}
                  onChange={handleInputChangeRCS}
                />
              </td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>
                <input
                  type="time"
                  name="tuesdayStart"
                  defaultValue={classHours.tuesdayStart}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="tuesdayEnd"
                  defaultValue={classHours.tuesdayEnd}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_MARTES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_MARTES ?? ''}
                  onChange={handleInputChangeRCS}
                />
              </td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>
                <input
                  type="time"
                  name="wednesdayStart"
                  defaultValue={classHours.wednesdayStart}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="wednesdayEnd"
                  defaultValue={classHours.wednesdayEnd}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_MIERCOLES"
                  value={
                    props.rowClassSchedule.TCAHORARIOSC_AULA_MIERCOLES ?? ''
                  }
                  onChange={handleInputChangeRCS}
                />
              </td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>
                <input
                  type="time"
                  name="thursdayStart"
                  defaultValue={classHours.thursdayStart}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="thursdayEnd"
                  defaultValue={classHours.thursdayEnd}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_JUEVES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_JUEVES ?? ''}
                  onChange={handleInputChangeRCS}
                />
              </td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>
                <input
                  type="time"
                  name="fridayStart"
                  defaultValue={classHours.fridayStart}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="fridayEnd"
                  defaultValue={classHours.fridayEnd}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_VIERNES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_VIERNES ?? ''}
                  onChange={handleInputChangeRCS}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-evenly">
          <button className="btn-cancel" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button
            className="btn-success"
            onClick={() => {
              if (props.rowClassSchedule.TCAHORARIOSC_ID === 0) {
                postRowClassSchedule(props.rowClassSchedule, classHours).then(
                  (res) => {
                    if (res.status === 201) {
                      alert('Se ha guardado correctamente')
                      props.setClassSchedule(res.data)
                      setShowModal(false)
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
                      setShowModal(false)
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
