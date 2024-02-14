'use client'

import { PDFViewer, usePDF } from '@react-pdf/renderer'

export default function PDFView() {
  async function getMatrix() {
    const res = await fetch('/api/matrices/pdf', {
      method: 'POST',
      // body: instance.blob,
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
    return res.status
  }

  return (
    <>
      <div className="flex justify-center h-screen">
        <PDFViewer className="m-5" width={'90%'}>
          {/* {pdfDocument} */}
        </PDFViewer>
      </div>
    </>
  )
}
