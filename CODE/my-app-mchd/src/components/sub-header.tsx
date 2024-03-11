export default function SubHeader({
  children,
}: {
  readonly children?: React.ReactNode
}) {
  return (
    <div className="flex bg-green-700">
      <h2 className="text-4xl size-2/3 text-white font-bold p-10">
        Aprobación de Matriz de Carga Horaria Docente
      </h2>
      {children}
    </div>
  )
}
