import { getMatrices } from '@/app/actions'
import MatrixList from '@/components/coordinator/rejected/matrix-list'
import SubHeader from '@/components/customs/sub-header'

export default async function ReceivedPage() {
  const rejectedMatrices = await getMatrices('r')

  return (
    <>
      <SubHeader />
      <MatrixList rejectedMatrices={rejectedMatrices} />
    </>
  )
}
