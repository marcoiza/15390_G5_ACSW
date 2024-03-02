import { getMatrices } from '@/app/actions'
import MatrixList from '@/src/coordinator/components/rejected/matrix-list'
import SubHeader from '@/src/components/customs/sub-header'

export default async function ReceivedPage() {
  const rejectedMatrices = await getMatrices('r')

  return (
    <>
      <SubHeader />
      <MatrixList rejectedMatrices={rejectedMatrices} />
    </>
  )
}
