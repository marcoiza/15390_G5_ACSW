import { API_URL } from '@/src/libs/constants'
import { WorkSchedule } from '@/src/models/work-schedule'
import { TCAHORARIOST } from '@prisma/client'

export const saveRowWorkSchedule = async (
  workScheduleRows: WorkSchedule
): Promise<TCAHORARIOST> => {
  try {
    const res = await fetch(API_URL + '/teacher/work-schedules/', {
      method: 'PUT',
      body: JSON.stringify(workScheduleRows),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: TCAHORARIOST = await res.json()
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error(error)
  }
}
