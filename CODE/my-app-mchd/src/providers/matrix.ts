import type Matrix from '@/src/models/matrix'

interface MatrixResponse {
  status: number
  matrix: Matrix
}

export const createMatrix = async (matrix: Matrix): Promise<MatrixResponse> => {
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
  matrix = await res.json()
  return { status: res.status , matrix }
}
