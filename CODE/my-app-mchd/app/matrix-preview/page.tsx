import Footer from '@/components/footer'
import Header from '@/components/header'
import MatrixPdf from '@/components/matrix-preview/matrix-pdf'
import StepsCheck from '@/components/matrix-record/steps-check'
import SubHeader from '@/components/sub-header'

export default function MatrixPreviewPage() {
  return (
    <div>
      <Header />
      <SubHeader />
      <StepsCheck />
      <MatrixPdf />
      <Footer />
    </div>
  )
}
