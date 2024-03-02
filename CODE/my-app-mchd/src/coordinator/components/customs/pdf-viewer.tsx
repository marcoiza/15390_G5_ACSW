'use client'

import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { getMatrix } from '@/src/utils/providers/pdf-matrix'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function PDFViewer(props: { readonly idMatrix: number }) {
  const [file, setFile] = useState<File | undefined>(undefined)

  useEffect(() => {
    getMatrix(props.idMatrix)
      .then((res) => setFile(res))
      .catch((error) => alert(error))
  }, [props.idMatrix])

  return (
    <div className="flex justify-center">
      <Document file={file}>
        <Page width={1500} pageNumber={1}>
          <Document />
        </Page>
      </Document>
    </div>
  )
}
