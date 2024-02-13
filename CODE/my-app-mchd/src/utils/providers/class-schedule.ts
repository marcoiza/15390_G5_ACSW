import { API_URL } from '@/src/libs/constants'
import { TCAHORARIOSC } from '@prisma/client'

interface ResponseClassSchedule {
  status: number
  data: TCAHORARIOSC[]
}

export async function postRowClassSchedule(
  rowClassSchedule: TCAHORARIOSC
): Promise<ResponseClassSchedule> {
  const res = await fetch(API_URL + '/class-schedules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rowClassSchedule),
  })
  return { status: res.status, data: await res.json() }
}

export async function putRowClassSchedule(
  rowClassSchedule: TCAHORARIOSC
): Promise<ResponseClassSchedule> {
  const res = await fetch(API_URL + '/class-schedules', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rowClassSchedule),
  })
  return { status: res.status, data: await res.json() }
}

export async function deleteRowClassSchedule(
  idRowClassSchedule: number
): Promise<ResponseClassSchedule> {
  const res = await fetch(API_URL + '/class-schedules/' + idRowClassSchedule, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return { status: res.status, data: await res.json() }
}
