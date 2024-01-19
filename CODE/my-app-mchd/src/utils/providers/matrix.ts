import type { TCAMATRICES } from '@prisma/client'

interface MatrixResponse {
  status: number
  idMatrix: number
}

export const postMatrix = async (
  matrix: TCAMATRICES
): Promise<MatrixResponse> => {
  const res = await fetch('http://localhost:3000/api/matrices', {
    method: 'POST',
    body: JSON.stringify(matrix),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to create matrix')
  }
  const { TCAMATRICES_ID } = await res.json()
  return { status: res.status, idMatrix: TCAMATRICES_ID }
}
