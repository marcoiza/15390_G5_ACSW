import MatrixStatusLBL from '@/src/components/matrix-status-lbl'
import { TCAMATRICES } from '@prisma/client'
import Link from 'next/link'

type MatrixState = 'received' | 'approved' | 'rejected'

export default function MatrixItem(props: {
  readonly idBanner: string
  readonly matrix: TCAMATRICES
  readonly state: MatrixState
}) {
  return (
    <>
      <div className="flex justify-between">
        <p className="py-1">
          {`Matriz ${props.matrix.TCAMATRICES_ID} [Periodo ${
            props.matrix.TCAPERIODOSA_CODIGO
          }] [${
            props.matrix.TCAMATRICES_FECHA_CREACION.toISOString().split('T')[0]
          }]`}
        </p>
        <div className="flex">
          <MatrixStatusLBL
            isTeacher={false}
            state={props.matrix.TCAMATRICES_ESTADO}
          />
          <Link
            className="bg-white py-1 px-4 ml-3 rounded border border-black"
            href={`/dashboard/${props.idBanner}/${props.state}/pdf-matrix?idMatrix=${props.matrix.TCAMATRICES_ID}`}
          >
            Ver Matriz
          </Link>
        </div>
      </div>
      <hr className="my-3" />
    </>
  )
}
