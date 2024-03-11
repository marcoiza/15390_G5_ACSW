import MatrixItem from '@/src/coordinator/components/customs/matrix-item'
import SectionContainer from '@/src/components/section-container'
import SubHeader from '@/src/components/sub-header'
import { getMatrices } from '@/app/actions'

export default async function ReceivedPage(props: {
  readonly params: { idBanner: string }
}) {
  const receivedMatrices = await getMatrices('e')

  return (
    <>
      <SubHeader />
      <SectionContainer title="Matrices de Carga Horaria Aprobadas">
        {receivedMatrices.map((matrix) => (
          <MatrixItem
            key={matrix.TCAMATRICES_ID}
            idBanner={props.params.idBanner}
            matrix={matrix}
            state="received"
          />
        ))}
      </SectionContainer>
    </>
  )
}
