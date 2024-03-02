import Link from 'next/link'

export default function StepsCheck(props: { readonly idMatrix: string }) {
  return (
    <div className="flex bg-slate-200">
      <div className="size-3/4">
        <ul className="flex">
          <li className="p-5">Información del Docente</li>
          <li className="p-5">Horario de Trabajo</li>
          <li className="p-5">Horario de Clase</li>
          <li className="p-5">Actividades</li>
          <li className="p-5">Resumen</li>
        </ul>
      </div>
      <div className="flex justify-end size-1/4">
        <div className="p-4">
          <button className="bg-white py-1 px-4 rounded border border-black">
            <Link href={`/dashboard/matrix-preview?idMatrix=${props.idMatrix}`}>
              Ver Matriz
            </Link>
          </button>
        </div>
        <div className="p-4">
          <p className="bg-yellow-200 py-1 px-4 rounded-xl">Para Revisión</p>
        </div>
      </div>
    </div>
  )
}
