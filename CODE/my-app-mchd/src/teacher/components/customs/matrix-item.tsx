import MatrixStatusLBL from '@/src/components/matrix-status-lbl'
import { TCAMATRICES } from '@prisma/client'
import Link from 'next/link'

export default function MatrixItem(props: { readonly matrix: TCAMATRICES }) {
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
            isTeacher={true}
            state={props.matrix.TCAMATRICES_ESTADO}
          />
          <Link
            className="bg-white py-1 px-4 ml-3 rounded border border-black"
            href={`/dashboard/${props.matrix.TCADOCENTES_ID_BANNER}/matrix-record?idBanner=${props.matrix.TCADOCENTES_ID_BANNER}&idMatrix=${props.matrix.TCAMATRICES_ID}`}
          >
            Ver Matriz
          </Link>
        </div>
      </div>
      <hr className="my-3" />
    </>
  )
}
