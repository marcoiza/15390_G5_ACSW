import PDFMatrixPreview from '@/components/teacher/matrix-preview/pdf-matrix-preview'
import SubHeader from '@/components/customs/sub-header'
import BtnContainer from '@/components/teacher/matrix-preview/btn-container'

export default function MatrixPreviewPage({
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
      <BtnContainer idMatrix={searchParams.idMatrix} />
      <PDFMatrixPreview idMatrix={Number(searchParams.idMatrix)} />
    </div>
  )
}
