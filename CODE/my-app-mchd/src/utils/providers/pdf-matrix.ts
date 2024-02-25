export async function postMatrix(data: Blob | null, namePdf: number) {
  try {
    const res = await fetch('/api/matrices/pdfs?namePdf=' + namePdf, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}

export async function getMatrix(idMatrix: number) {
  try {
    const res = await fetch('/api/matrices/pdfs/' + idMatrix, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
    const blob = await res.blob()
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return new File([blob], 'matrix.pdf', { type: 'application/pdf' })
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
