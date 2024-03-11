function getBGColor(status: string): string {
  switch (status) {
    case 'e':
      return 'bg-yellow-200'
    case 'a':
      return 'bg-green-400'
    case 'r':
      return 'bg-violet-400'
    default:
      return ''
  }
}

function getTextForTeacher(status: string): string {
  switch (status) {
    case 'e':
      return 'Enviado para Revisión'
    case 'a':
      return 'Aprobada'
    case 'r':
      return 'Recibido para Corrección'
    default:
      return ''
  }
}

function getTextForCoordinator(status: string): string {
  switch (status) {
    case 'e':
      return 'Recibido para Revisión'
    case 'a':
      return 'Aprobada'
    case 'r':
      return 'Enviado para Corrección'
    default:
      return ''
  }
}

export default function MatrixStatusLBL(props: {
  readonly state: string
  readonly isTeacher: boolean
}) {
  return (
    <p className={`${getBGColor(props.state)} py-1 px-4 rounded-xl`}>
      {props.isTeacher
        ? getTextForTeacher(props.state)
        : getTextForCoordinator(props.state)}
    </p>
  )
}
