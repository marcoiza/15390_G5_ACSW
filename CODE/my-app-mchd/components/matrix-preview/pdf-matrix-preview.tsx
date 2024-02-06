'use client'

import { PDFViewer, usePDF } from '@react-pdf/renderer'
import MatrixPDF from './matrix-pdf'

export default function PDFMatrixPreview() {
  const pdfDocument = <MatrixPDF periodDescription="oct" />
  const [instance, updateInstance] = usePDF({
    document: pdfDocument,
  })

  async function sendMatrix() {
    const res = await fetch('/api/matrices/pdf', {
      method: 'POST',
      body: instance.blob,
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
    return res.status
  }

  return (
    <>
      <div className="flex justify-center mt-2">
        <button className="btn-success" onClick={sendMatrix}>
          Enviar Matriz
        </button>
      </div>
      <div className="flex justify-center h-screen">
        <PDFViewer className="m-5" width={'90%'}>
          {pdfDocument}
        </PDFViewer>
      </div>
    </>
  )
}
