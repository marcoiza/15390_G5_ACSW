import { API_URL } from '@/src/libs/constants'
import type { TCAHORARIOST } from '@prisma/client'

export const saveRowWorkSchedule = async (
  workScheduleRows: TCAHORARIOST[]
): Promise<number> => {
  const res = await fetch(API_URL + '/work-schedules/', {
    method: 'PUT',
    body: JSON.stringify(workScheduleRows),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to create')
  }
  return res.status
}
