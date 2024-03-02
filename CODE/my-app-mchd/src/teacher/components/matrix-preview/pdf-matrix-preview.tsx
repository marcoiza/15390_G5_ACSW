'use client'

import PDFMatrixTemplate from '@/src/teacher/components/matrix-preview/pdf-matrix-template'
import { postMatrix } from '@/src/utils/providers/pdf-matrix'
import { PDFViewer, usePDF } from '@react-pdf/renderer'

export default function PDFMatrixPreview(props: { readonly idMatrix: number }) {
  const pdfDocument = <PDFMatrixTemplate periodDescription="oct" />
  const [instance, updateInstance] = usePDF({
    document: pdfDocument,
  })

  return (
    <>
      <div className="flex justify-center mt-2">
        <button
          className="btn-success"
          onClick={() => {
            postMatrix(instance.blob, props.idMatrix)
              .then(() => alert('Matriz enviada'))
              .catch((error) => alert(error))
          }}
        >
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
