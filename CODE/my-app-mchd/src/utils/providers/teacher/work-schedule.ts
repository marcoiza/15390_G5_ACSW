import { API_URL } from '@/src/libs/constants'
import { TCAHORARIOST } from '@prisma/client'

export const saveCellWorkSchedule = async (
  workScheduleDay: TCAHORARIOST
): Promise<void> => {
  try {
    const res = await fetch(API_URL + '/teacher/work-schedules/', {
      method: 'PUT',
      body: JSON.stringify(workScheduleDay),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}

export const deleteCellWorkSchedule = async (
  workScheduleDay: TCAHORARIOST
): Promise<void> => {
  try {
    const res = await fetch(API_URL + '/teacher/work-schedules/', {
      method: 'DELETE',
      body: JSON.stringify(workScheduleDay),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
