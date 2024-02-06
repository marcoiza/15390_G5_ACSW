'use client'

import { PDFViewer } from '@react-pdf/renderer'
import MatrixPDF from './matrix-pdf'

export default function PDFMatrixPreview() {
  return (
    <div className="flex justify-center h-screen">
      <PDFViewer className="m-5" width={'90%'}>
        <MatrixPDF periodDescription="octubre 2023 - marzo 2024 (202351)" />
      </PDFViewer>
    </div>
  )
}
