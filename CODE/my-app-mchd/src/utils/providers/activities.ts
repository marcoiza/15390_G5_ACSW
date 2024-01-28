import { TCAACTIVIDADESD } from '@prisma/client'

export async function addActivityInMatrix(newActForMatrix: TCAACTIVIDADESD) {
  const res = await fetch('/api/matrix-activities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newActForMatrix),
  })
  return { status: res.status, data: await res.json() }
}

export async function updateActivityInMatrix(newActForMatrix: TCAACTIVIDADESD) {
  const res = await fetch('/api/matrix-activities', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newActForMatrix),
  })
  return { status: res.status, data: await res.json() }
}

export async function deleteActivityInMatrix(idActivity: number) {
  const res = await fetch(`/api/matrix-activities/${idActivity}`, {
    method: 'DELETE',
  })
  return { status: res.status, data: await res.json() }
}
