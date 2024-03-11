import { getTeacher, getAcademicTitles } from '@/app/actions'
import SectionContainer from '@/src/components/section-container'

export default async function TeacherInfo({
  idBanner,
}: {
  readonly idBanner: string
}) {
  const teacher = await getTeacher(idBanner)
  idBanner = teacher?.TCADOCENTES_ID_BANNER ?? ''
  const academicTitles = await getAcademicTitles(idBanner)

  return (
    <SectionContainer title="Información Docente">
      <table className="w-full text-left">
        <thead>
          <tr className="text-xl font-sans">
            <th>Datos del Profesor</th>
            <th>Tipo de Personal Académico</th>
            <th>Título, Grado Académico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4 className="font-bold">Apellidos</h4>
              <p>{teacher?.TCADOCENTES_APELLIDOS}</p>
              <h4 className="font-bold">Nombres</h4>
              <p>{teacher?.TCADOCENTES_NOMBRES}</p>
              <h4 className="font-bold">ID Banner</h4>
              <p>{teacher?.TCADOCENTES_ID_BANNER}</p>
              <h4 className="font-bold">CC/Pasaporte</h4>
              <p>{teacher?.TCADOCENTES_CEDULA}</p>
            </td>
            <td>
              <h4 className="font-bold">Tipo</h4>
              <p>{teacher?.TCADOCENTES_TIPO_CONTRATO}</p>
              <h4 className="font-bold">Dedicación</h4>
              <p>{teacher?.TCADOCENTES_DEDICACION}</p>
              <h4 className="font-bold">Categoría</h4>
              <p>{teacher?.TCADOCENTES_TITULARIDAD}</p>
              <h4 className="font-bold">Horas</h4>
              <p>{teacher?.TCADOCENTES_HORAS_CONTRATO}</p>
            </td>
            <td>
              <ul className="content-start size-full">
                {academicTitles?.map((title) => (
                  <li key={title.TCATITULOSA_ID}>
                    {title.TCATITULOSA_DESCRIPCION}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </SectionContainer>
  )
}
