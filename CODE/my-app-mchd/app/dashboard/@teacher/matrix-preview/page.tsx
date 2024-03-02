import PDFMatrixPreview from '@/src/teacher/components/matrix-preview/pdf-matrix-preview'
import BtnContainer from '@/src/teacher/components/matrix-preview/btn-container'
import SubHeader from '@/src/components/sub-header'

export default function MatrixPreviewPage({
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
      <BtnContainer idMatrix={searchParams.idMatrix} />
      <PDFMatrixPreview idMatrix={Number(searchParams.idMatrix)} />
    </div>
  )
}
