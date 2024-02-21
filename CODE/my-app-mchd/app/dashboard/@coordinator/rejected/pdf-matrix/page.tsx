import BtnContainer from '@/components/coordinator/rejected/btn-container'
import SubHeader from '@/components/customs/sub-header'
import PDFViewer from '@/components/coordinator/customs/pdf-viewer'

export default async function PDFMatrixPage({
  searchParams,
}: {
  searchParams: { idMatrix: string }
}) {
  return (
    <div>
      <SubHeader>
        <p className="text-3xl size-1/2 text-right text-white p-10">
          Vista Preliminar
        </p>
      </SubHeader>
      <BtnContainer />
      <PDFViewer idMatrix={Number(searchParams.idMatrix)} />
    </div>
  )
}
