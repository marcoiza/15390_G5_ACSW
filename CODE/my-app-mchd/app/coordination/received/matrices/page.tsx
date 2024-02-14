import { getReceivedMatrices } from '@/app/actions'
import MatrixList from '@/components/coordination/received/matrix-list'

export default async function ReceivedPage() {
  const receivedMatrices = await getReceivedMatrices()

  return (
    <>
      <MatrixList receivedMatrices={receivedMatrices} />
    </>
  )
}
