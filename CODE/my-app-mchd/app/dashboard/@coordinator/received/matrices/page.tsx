import { getMatrices } from '@/app/actions'
import MatrixList from '@/src/coordinator/components/received/matrix-list'
import SubHeader from '@/src/components/sub-header'

export default async function ReceivedPage() {
  const receivedMatrices = await getMatrices('e')

  return (
    <>
      <SubHeader />
      <MatrixList receivedMatrices={receivedMatrices} />
    </>
  )
}
