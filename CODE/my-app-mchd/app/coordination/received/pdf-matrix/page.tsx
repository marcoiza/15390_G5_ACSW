import StepsCheck from '@/components/matrix-preview/steps-check'
import SubHeader from '@/components/customs/sub-header'
import PDFView from '@/components/coordination/customs/pdf-view'

export default function PDFMatrixPage() {
  return (
    <div>
      <SubHeader>
        <p className="text-3xl size-1/2 text-right text-white p-10">
          Vista Preliminar
        </p>
      </SubHeader>
      <StepsCheck />
      <PDFView />
    </div>
  )
}
