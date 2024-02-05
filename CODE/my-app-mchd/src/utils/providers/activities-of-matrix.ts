import { ActivityOfMatrix } from '@/app/actions'
import { API_URL } from '@/src/libs/constants'
import { TCAACTIVIDADESD } from '@prisma/client'

interface ActivityOfMatrixResponse {
  status: number
  data: TCAACTIVIDADESD
}

export async function addActivityOfMatrix(
  newActForMatrix: TCAACTIVIDADESD
): Promise<ActivityOfMatrixResponse> {
  const res = await fetch(API_URL + '/activities-of-matrix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newActForMatrix),
  })
  return { status: res.status, data: await res.json() }
}

export async function updateActivityOfMatrix(
  newActForMatrix: TCAACTIVIDADESD
): Promise<ActivityOfMatrixResponse> {
  const res = await fetch(API_URL + '/activities-of-matrix', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newActForMatrix),
  })
  return { status: res.status, data: await res.json() }
}

export async function deleteActivityInMatrix(idActivityOfMatrix: number) {
  const res = await fetch(
    API_URL + '/activities-of-matrix/' + idActivityOfMatrix,
    {
      method: 'DELETE',
    }
  )
  return { status: res.status, data: await res.json() }
}
