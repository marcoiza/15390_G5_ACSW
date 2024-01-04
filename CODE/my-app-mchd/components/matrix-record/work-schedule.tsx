export default function WorkSchedule() {
  return (
    <div>
      <h2 className="text-3xl font-bold px-10 py-5">Horario de trabajo</h2>
      <table className="mx-auto size-3/4 border-collapse text-center border border-green-600">
        <thead>
          <tr>
            <th className="border border-green-600 bg-green-700 text-white">JORANADA</th>
            <th className="border border-green-600 bg-green-700 text-white">REGISTRO</th>
            <th className="border border-green-600 bg-green-700 text-white">BIOMETRICO</th>
            <th className="border border-green-600">LUNES</th>
            <th className="border border-green-600">MARTES</th>
            <th className="border border-green-600">MIERCOLES</th>
            <th className="border border-green-600">JUEVES</th>
            <th className="border border-green-600">VIERNES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-600 bg-green-500" rowSpan={2}>
              Matutina
            </td>
            <td className="border border-green-600 bg-green-500">Ingreso</td>
            <td className="border border-green-600 bg-green-500">Físico</td>
            <td className="border border-green-600">11:00</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">08:00</td>
            <td className="border border-green-600">08:00</td>
            <td className="border border-green-600">08:00</td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-500">Salida</td>
            <td className="border border-green-600 bg-green-500">Físico</td>
            <td className="border border-green-600">13:00</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">13:00</td>
            <td className="border border-green-600">13:00</td>
            <td className="border border-green-600">13:00</td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-500" rowSpan={2}>
              Vespertina
            </td>
            <td className="border border-green-600 bg-green-500">Ingreso</td>
            <td className="border border-green-600 bg-green-500">Físico</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">15:00</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">-</td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-500">Salida</td>
            <td className="border border-green-600 bg-green-500">Físico</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">19:00</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">-</td>
            <td className="border border-green-600">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
