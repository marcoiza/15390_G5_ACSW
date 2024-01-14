import Footer from '@/components/footer'
import Header from '@/components/header'
import MatrixPdf from '@/components/matrix-preview/matrix-pdf'
import StepsCheck from '@/components/matrix-record/steps-check'
import SubHeader from '@/components/sub-header'

export default function MatrixPreviewPage() {
  return (
    <div>
      <Header />
      <SubHeader>
        <p className='text-3xl size-1/2 text-right text-white p-10'>Vista Preliminar</p>
      </SubHeader>
      <StepsCheck />
      <MatrixPdf />
      <Footer />
    </div>
  )
}
