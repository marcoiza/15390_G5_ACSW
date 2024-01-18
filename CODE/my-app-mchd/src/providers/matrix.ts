import type { TCAMATRICES } from '@prisma/client'

interface MatrixResponse {
  status: number
  matrix: TCAMATRICES
}

export const createMatrix = async (
  matrix: TCAMATRICES
): Promise<MatrixResponse> => {
  const { TCAMATRICES_ID, ...body } = matrix
  const res = await fetch('http://localhost:3000/api/matrices', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to create matrix')
  }
  matrix = await res.json()
  return { status: res.status, matrix }
}
