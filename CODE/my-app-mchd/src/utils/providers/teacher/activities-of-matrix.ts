import { API_URL } from '@/src/libs/constants'
import { TCAACTIVIDADESD } from '@prisma/client'

export async function postActivityOfMatrix(
  newActForMatrix: TCAACTIVIDADESD
): Promise<TCAACTIVIDADESD> {
  try {
    const res = await fetch(API_URL + '/activities-of-matrix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newActForMatrix),
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: TCAACTIVIDADESD = await res.json()
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}

export async function putActivityOfMatrix(
  newActForMatrix: TCAACTIVIDADESD
): Promise<TCAACTIVIDADESD> {
  try {
    const res = await fetch(API_URL + '/activities-of-matrix', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newActForMatrix),
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: TCAACTIVIDADESD = await res.json()
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}

export async function deleteActivityInMatrix(idActivityOfMatrix: number) {
  try {
    const res = await fetch(
      API_URL + '/activities-of-matrix/' + idActivityOfMatrix,
      {
        method: 'DELETE',
      }
    )
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    //TODO: define what to return
    return 'deleted'
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
