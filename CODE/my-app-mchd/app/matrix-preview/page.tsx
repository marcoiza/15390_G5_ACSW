import Footer from '@/components/customs/footer'
import Header from '@/components/customs/header'
import PDFMatrixPreview from '@/components/matrix-preview/pdf-matrix-preview'
import StepsCheck from '@/components/matrix-preview/steps-check'
import SubHeader from '@/components/customs/sub-header'

export default function MatrixPreviewPage() {
  return (
    <div>
      <Header />
      <SubHeader>
        <p className="text-3xl size-1/2 text-right text-white p-10">
          Vista Preliminar
        </p>
      </SubHeader>
      <StepsCheck />
      <PDFMatrixPreview />
      <Footer />
    </div>
  )
}
