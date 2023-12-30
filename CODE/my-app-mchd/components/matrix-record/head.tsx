export default function Head() {
  return (
    <div>
      <div className="flex bg-green-600">
        <h2 className="text-4xl size-1/2 text-white font-bold p-10">
          Matriz de Carga Horaria Docente
        </h2>
        <div className="size-1/2 text-right text-white p-10">
          <p>Última modificación: 2021-10-01 10:00:00</p>
          <p>Docente propietario de Matriz: Mauricio Loachamin</p>
        </div>
      </div>
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
            <button className="bg-white py-1 px-4 rounded">
              Vista Preliminar
            </button>
          </div>
          <div className="p-4">
            <p className="bg-yellow-200 py-1 px-4 rounded">Enviado para Revisión</p>
          </div>
        </div>
      </div>
    </div>
  );
}
