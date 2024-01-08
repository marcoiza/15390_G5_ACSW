import Link from 'next/link'

export default function SendedMatrix() {
  return (
    <div className="py-3">
      <h2 className="text-3xl font-bold px-10 py-5">
        Aprobación de Matriz de Carga Horaria
      </h2>
      <div className="flex justify-center">
        <div className="flex size-3/4 justify-between">
          <p className="py-1 px-4">
            Matriz [codigo-periodo] [noviembre 23 - marzo 24]
          </p>
          <div className="flex">
            <p className="bg-yellow-200 py-1 px-4 rounded-xl">
              Enviado para Revisión
            </p>
            <button className="bg-white py-1 px-4 ml-3 rounded border border-black">
              <Link href={'/matrix-record'}>Ver Matriz</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-white py-1 px-4 rounded border border-black">
          <Link href={'/dashboard-teacher/period'} passHref>
            Hacer Matriz
          </Link>
        </button>
      </div>
    </div>
  )
}
