import { getMatrices } from '@/app/actions'
import MatrixList from '@/src/coordinator/components/approved/matrix-list'
import SubHeader from '@/src/components/customs/sub-header'

export default async function ReceivedPage() {
  const approvedMatrices = await getMatrices('a')

  return (
    <>
      <SubHeader />
      <MatrixList approvedMatrices={approvedMatrices} />
    </>
  )
}
