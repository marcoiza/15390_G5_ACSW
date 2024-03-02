import { API_URL } from '@/src/libs/constants'
import type { TCAMATRICES } from '@prisma/client'

export async function postMatrix(matrix: TCAMATRICES): Promise<number> {
  try {
    const res = await fetch(API_URL + '/common/matrices', {
      method: 'POST',
      body: JSON.stringify(matrix),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    return data.TCAMATRICES_ID
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
