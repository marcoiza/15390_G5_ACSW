import type { TCADOCENTES } from '@prisma/client'
import type { TCATITULOSA } from '@prisma/client'
import prisma from '@/src/libs/db'

async function getData(idBanner: string): Promise<TCADOCENTES | null> {
  const res = await prisma.tCADOCENTES.findUnique({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

async function getAcademicTitles(
  idBanner: string
): Promise<TCATITULOSA[] | null> {
  const res = await prisma.tCATITULOSA.findMany({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

export default async function TeacherInfo({ idBanner }: { idBanner: string }) {
  const teacher = await getData(idBanner)
  idBanner = teacher?.TCADOCENTES_ID_BANNER ?? ''
  const academicTitles = await getAcademicTitles(idBanner)
  const emptyField = '-'

  return (
    <div>
      <h2 className="text-3xl font-bold px-10 py-5">Información Docente</h2>
      <table className="mx-auto size-3/4 text-left">
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
              <p>{teacher?.TCADOCENTES_APELLIDOS || emptyField}</p>
              <h4 className="font-bold">Nombres</h4>
              <p>{teacher?.TCADOCENTES_NOMBRES || emptyField}</p>
              <h4 className="font-bold">ID Banner</h4>
              <p>{teacher?.TCADOCENTES_ID_BANNER || emptyField}</p>
              <h4 className="font-bold">CC/Pasaporte</h4>
              <p>{teacher?.TCADOCENTES_CEDULA || emptyField}</p>
            </td>
            <td>
              <h4 className="font-bold">Tipo</h4>
              <p>{teacher?.TCADOCENTES_TIPO_CONTRATO || emptyField}</p>
              <h4 className="font-bold">Dedicación</h4>
              <p>{teacher?.TCADOCENTES_DEDICACION || emptyField}</p>
              <h4 className="font-bold">Categoría</h4>
              <p>{teacher?.TCADOCENTES_TITULARIDAD || emptyField}</p>
              <h4 className="font-bold">Horas</h4>
              <p>{teacher?.TCADOCENTES_HORAS_CONTRATO || emptyField}</p>
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
    </div>
  )
}
