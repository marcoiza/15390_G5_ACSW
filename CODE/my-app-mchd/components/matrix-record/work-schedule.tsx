import Image from 'next/image'

export default function WorkSchedule() {
  const cellHour = (
    <div className="flex justify-center">
      <input type="time"></input>
      <button className="bg-green-700 rounded-md">
        <Image
          className="p-1"
          src="/delete.svg"
          alt="Biometrico"
          width={24}
          height={24}
        />
      </button>
    </div>
  )

  const biometricOptions = (
    <select className="bg-green-200">
      <option value="fisico">Físico</option>
      <option value="virtual">Virtual</option>
      <option value="fisico-virtual">Físico Virtual</option>
    </select>
  )

  return (
    <div>
      <h2 className="text-3xl font-bold px-10 py-5">Horario de trabajo</h2>
      <table className="mx-auto size-3/4 border-collapse text-center border border-green-600">
        <thead>
          <tr>
            <th className="border border-green-600 bg-green-700 text-white">
              JORANADA
            </th>
            <th className="border border-green-600 bg-green-700 text-white">
              REGISTRO
            </th>
            <th className="border border-green-600 bg-green-700 text-white">
              BIOMETRICO
            </th>
            <th className="border border-green-600 bg-green-200">LUNES</th>
            <th className="border border-green-600 bg-green-200">MARTES</th>
            <th className="border border-green-600 bg-green-200">MIERCOLES</th>
            <th className="border border-green-600 bg-green-200">JUEVES</th>
            <th className="border border-green-600 bg-green-200">VIERNES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              Matutina
            </td>
            <td className="border border-green-600 bg-green-200">Ingreso</td>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              {biometricOptions}
            </td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-200">Salida</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              Vespertina
            </td>
            <td className="border border-green-600 bg-green-200">Ingreso</td>
            <td className="border border-green-600 bg-green-200" rowSpan={2}>
              {biometricOptions}
            </td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
          </tr>
          <tr>
            <td className="border border-green-600 bg-green-200">Salida</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
            <td className="border border-green-600">{cellHour}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
