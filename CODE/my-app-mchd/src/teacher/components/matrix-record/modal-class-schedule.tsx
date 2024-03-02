import ModalTemplateImgBtn from '@/src/components/modal-template-img-btn'
import {
  postRowClassSchedule,
  putRowClassSchedule,
} from '@/src/utils/providers/teacher/class-schedule'
import { TCAHORARIOSC } from '@prisma/client'
import { Dispatch, ChangeEvent, SetStateAction, useState } from 'react'

interface ModalClassScheduleProps {
  readonly rowClassSchedule: TCAHORARIOSC
  readonly setRowClassSchedule: Dispatch<SetStateAction<TCAHORARIOSC>>
  readonly setClassSchedule: Dispatch<SetStateAction<TCAHORARIOSC[]>>
  readonly setShowAddRow: Dispatch<SetStateAction<boolean>>
}

export default function ModalClassSchedule(props: ModalClassScheduleProps) {
  const [showModal, setShowModal] = useState(false)

  function handleInputTextChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    props.setRowClassSchedule((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit() {
    if (props.rowClassSchedule.TCAHORARIOSC_ID === 0) {
      postRowClassSchedule(props.rowClassSchedule)
        .then((data) => {
          props.setClassSchedule(data)
          setShowModal(false)
          alert('Se ha guardado correctamente')
        })
        .catch((error) => alert(error))
    } else {
      putRowClassSchedule(props.rowClassSchedule)
        .then((data) => {
          alert('Se ha guardado correctamente')
          props.setClassSchedule(data)
          setShowModal(false)
        })
        .catch((error) => alert(error))
    }
    props.setShowAddRow(false)
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
                  name="TCAHORARIOSC_LUNES_ENTRADA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_LUNES_ENTRADA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_LUNES_SALIDA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_LUNES_SALIDA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_LUNES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_LUNES ?? ''}
                  onChange={handleInputTextChange}
                />
              </td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_MARTES_ENTRADA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_MARTES_ENTRADA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_MARTES_SALIDA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_MARTES_SALIDA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_MARTES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_MARTES ?? ''}
                  onChange={handleInputTextChange}
                />
              </td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_MIERCOLES_ENTRADA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_MIERCOLES_ENTRADA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_MIERCOLES_SALIDA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_MIERCOLES_SALIDA
                  }
                  onChange={handleInputTextChange}
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
                  onChange={handleInputTextChange}
                />
              </td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_JUEVES_ENTRADA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_JUEVES_ENTRADA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_JUEVES_SALIDA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_JUEVES_SALIDA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_JUEVES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_JUEVES ?? ''}
                  onChange={handleInputTextChange}
                />
              </td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_VIERNES_ENTRADA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_VIERNES_ENTRADA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="TCAHORARIOSC_VIERNES_SALIDA"
                  defaultValue={
                    props.rowClassSchedule.TCAHORARIOSC_VIERNES_SALIDA
                  }
                  onChange={handleInputTextChange}
                />
              </td>
              <td>
                <input
                  className="bg-gray-300 rounded-md text-center"
                  type="text"
                  name="TCAHORARIOSC_AULA_VIERNES"
                  value={props.rowClassSchedule.TCAHORARIOSC_AULA_VIERNES ?? ''}
                  onChange={handleInputTextChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-evenly">
          <button className="btn-white" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button
            className="btn-success"
            type="submit"
            form="class-schedule-form"
            onClick={(e) => {
              onSubmit()
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </ModalTemplateImgBtn>
  )
}
