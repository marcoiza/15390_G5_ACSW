import { getMatrices } from '@/app/actions'
import MatrixList from '@/components/coordinator/approved/matrix-list'
import SubHeader from '@/components/customs/sub-header'

export default async function ReceivedPage() {
  const approvedMatrices = await getMatrices('a')

  return (
    <>
      <SubHeader />
      <MatrixList approvedMatrices={approvedMatrices} />
    </>
  )
}
