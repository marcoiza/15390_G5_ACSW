import SubHeader from '@/src/components/sub-header'
import { getMatrices } from '@/app/actions'
import SectionContainer from '@/src/components/section-container'
import MatrixItem from '@/src/coordinator/components/customs/matrix-item'

export default async function ReceivedPage(props: {
  readonly params: { idBanner: string }
}) {
  const rejectedMatrices = await getMatrices('r')

  return (
    <>
      <SubHeader />
      <SectionContainer title="Matrices de Carga Horaria Aprobadas">
        {rejectedMatrices.map((matrix) => (
          <MatrixItem
            key={matrix.TCAMATRICES_ID}
            idBanner={props.params.idBanner}
            matrix={matrix}
            state="rejected"
          />
        ))}
      </SectionContainer>
    </>
  )
}
