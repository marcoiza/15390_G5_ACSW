import MatrixList from '@/src/coordinator/components/rejected/matrix-list'
import SubHeader from '@/src/components/sub-header'
import { getMatrices } from '@/app/actions'

export default async function ReceivedPage() {
  const rejectedMatrices = await getMatrices('r')

  return (
    <>
      <SubHeader />
      <MatrixList rejectedMatrices={rejectedMatrices} />
    </>
  )
}
