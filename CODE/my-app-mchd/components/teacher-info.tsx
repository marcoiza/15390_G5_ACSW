export default function TeacherInfo() {
  return (
    <>
      <h3 className="text-3xl font-bold px-10 py-5">Información Docente</h3>
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
              <p>Loachamin Valencia</p>
            </td>
            <td>
              <h4 className="font-bold">Tipo</h4>
              <p>No</p>
            </td>
            <td>
              <p>Ingeniero de Sistema</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
