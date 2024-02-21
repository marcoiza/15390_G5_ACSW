import Link from 'next/link'
import ModalTemplate from '@/components/customs/modal-template'
import ModalPeriod from '@/components/teacher/period/modal-period'

export default function TeacherMatrix(props: { idBanner: string }) {
  return (
    <div className="py-3">
      <h2 className="text-3xl font-bold px-10 py-5">
        Aprobación de Matriz de Carga Horaria
      </h2>
      <div className="flex justify-center">
        <div className="flex size-3/4 justify-between">
          <p className="py-1">
            Matriz [codigo-periodo] [noviembre 23 - marzo 24]
          </p>
          <div className="flex">
            <p className="bg-yellow-200 py-1 px-4 rounded-xl">
              Enviado para Revisión
            </p>
            <button className="bg-white py-1 px-4 ml-3 rounded border border-black">
              {/* <Link href={'/matrix-record'}>Ver Matriz</Link> */}
              Ver Matriz
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ModalTemplate textTitle="PERIODO ACADÉMICO" textButton="Crear Matriz">
          <ModalPeriod idBanner={props.idBanner} />
        </ModalTemplate>
      </div>
    </div>
  )
}
