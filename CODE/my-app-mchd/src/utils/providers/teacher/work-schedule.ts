import { API_URL } from '@/src/libs/constants'
import type { TCAHORARIOST } from '@prisma/client'

export const saveRowWorkSchedule = async (
  workScheduleRows: TCAHORARIOST[]
): Promise<void> => {
  try {
    const res = await fetch(API_URL + '/work-schedules/', {
      method: 'PUT',
      body: JSON.stringify(workScheduleRows),
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
