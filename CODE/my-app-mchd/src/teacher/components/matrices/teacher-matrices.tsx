import ModalPeriod from '@/src/teacher/components/matrices/modal-period'
import MatrixItem from '@/src/teacher/components/customs/matrix-item'
import SectionContainer from '@/src/components/section-container'
import ModalTemplate from '@/src/components/modal-template'
import { TCAMATRICES } from '@prisma/client'

export default function TeacherMatrices(props: {
  readonly matrices: TCAMATRICES[]
  readonly idBanner: string
}) {
  return (
    <>
      <SectionContainer title="Matrices Enviadas">
        {props.matrices.map((matrix) => (
          <MatrixItem key={matrix.TCAMATRICES_ID} matrix={matrix} />
        ))}
      </SectionContainer>
      <div className="flex justify-center">
        <ModalTemplate textTitle="PERIODO ACADÉMICO" textButton="Crear Matriz">
          <ModalPeriod idBanner={props.idBanner} />
        </ModalTemplate>
      </div>
    </>
  )
}
