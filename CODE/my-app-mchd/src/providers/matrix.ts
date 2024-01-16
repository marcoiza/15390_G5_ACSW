import type Matrix from '@/src/interfaces/matrix'

export const createMatrix = async (matrix: Matrix): Promise<number> => {
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
  return res.status
}
