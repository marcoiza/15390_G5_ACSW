import { getMatrices } from '@/app/actions'
import MatrixList from '@/components/coordinator/received/matrix-list'
import SubHeader from '@/components/customs/sub-header'

export default async function ReceivedPage() {
  const receivedMatrices = await getMatrices('e')

  return (
    <>
      <SubHeader />
      <MatrixList receivedMatrices={receivedMatrices} />
    </>
  )
}
