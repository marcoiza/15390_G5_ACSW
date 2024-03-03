import MatrixList from '@/src/coordinator/components/approved/matrix-list'
import SubHeader from '@/src/components/sub-header'
import { getMatrices } from '@/app/actions'

export default async function ReceivedPage() {
  const approvedMatrices = await getMatrices('a')

  return (
    <>
      <SubHeader />
      <MatrixList approvedMatrices={approvedMatrices} />
    </>
  )
}
