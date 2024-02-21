import { API_URL } from '@/src/libs/constants'
import { TCAHORARIOSC } from '@prisma/client'

export async function postRowClassSchedule(
  rowClassSchedule: TCAHORARIOSC
): Promise<TCAHORARIOSC[]> {
  try {
    const res = await fetch(API_URL + '/class-schedules', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowClassSchedule),
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: TCAHORARIOSC[] = await res.json()
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}

export async function putRowClassSchedule(
  rowClassSchedule: TCAHORARIOSC
): Promise<TCAHORARIOSC[]> {
  try {
    const res = await fetch(API_URL + '/class-schedules', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowClassSchedule),
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: TCAHORARIOSC[] = await res.json()
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}

export async function deleteRowClassSchedule(
  idRowClassSchedule: number
): Promise<TCAHORARIOSC[]> {
  try {
    const res = await fetch(
      API_URL + '/class-schedules/' + idRowClassSchedule,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
