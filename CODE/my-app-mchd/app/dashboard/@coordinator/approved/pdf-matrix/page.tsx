import BtnContainer from '@/src/coordinator/components/approved/btn-container'
import SubHeader from '@/src/components/customs/sub-header'
import PDFViewer from '@/src/coordinator/coordinator/customs/pdf-viewer'

export default async function PDFMatrixPage({
  searchParams,
}: {
  readonly searchParams: { idMatrix: string }
}) {
  return (
    <div>
      <SubHeader>
        <p className="text-3xl size-1/2 text-right text-white p-10">
          Vista Preliminar
        </p>
      </SubHeader>
      <BtnContainer idMatrix={Number(searchParams.idMatrix)} />
      <PDFViewer idMatrix={Number(searchParams.idMatrix)} />
    </div>
  )
}
