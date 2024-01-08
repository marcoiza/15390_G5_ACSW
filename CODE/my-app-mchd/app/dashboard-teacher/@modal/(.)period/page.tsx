import { Modal } from '@/components/modal'
import type AcademicPeriod from '@/src/interfaces/academic-period'
import prisma from '@/src/lib/db'
import Link from 'next/link'

async function getData(): Promise<AcademicPeriod[] | null> {
  const res = await prisma.tCAPERIODOSA.findMany()
  return res
}

export default async function PeriodModal() {
  const academicPeriods = (await getData()) ?? []

  return (
    <Modal>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center">
          Seleccionar Periodo Académico
        </h2>
        <div className="flex flex-col justify-center">
          {/* <label htmlFor="cars">Elegir periodo:</label> */}
          <select className="my-3" id="cars">
            {academicPeriods.map((period) => (
              <option
                className="text-center"
                key={period.TCAPERIODOSA_CODIGO}
                value={period.TCAPERIODOSA_CODIGO}
              >
                {period.TCAPERIODOSA_DESCRIPCION}
              </option>
            ))}
          </select>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href={'/matrix-record'}>Continuar</Link>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
