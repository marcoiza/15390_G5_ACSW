import Footer from '@/components/footer'
import Header from '@/components/header'
import MatrixPdf from '@/components/matrix-preview/matrix-pdf'
import Head from '@/components/matrix-record/head'

export default function MatrixPreview() {
  return (
    <div>
      <Header />
      <Head />
      <MatrixPdf />
      <Footer />
    </div>
  )
}
