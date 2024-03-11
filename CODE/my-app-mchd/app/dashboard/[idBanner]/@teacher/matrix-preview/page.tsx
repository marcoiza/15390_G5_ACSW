import PDFMatrixPreview from '@/src/teacher/components/matrix-preview/pdf-matrix-preview'
import BtnContainer from '@/src/teacher/components/matrix-preview/btn-container'
import SubHeader from '@/src/components/sub-header'
import { getMatrixForPDF } from '@/app/actions'
import { MatrixForPDF } from '@/src/models/matrix'

export default async function MatrixPreviewPage({
  searchParams,
}: {
  readonly searchParams: { idMatrix: string }
}) {
  const idMatrix = Number(searchParams.idMatrix)
  const matrixForPDF: MatrixForPDF = await getMatrixForPDF(idMatrix)

  return (
    <div>
      <SubHeader>
        <p className="text-3xl size-1/2 text-right text-white p-10">
          Vista Preliminar
        </p>
      </SubHeader>
      <BtnContainer idMatrix={searchParams.idMatrix} />
      <PDFMatrixPreview matrixForPDF={matrixForPDF} />
    </div>
  )
}
