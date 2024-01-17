import type { TCAHORARIOST as WorkSchedule } from '@/src/models/work-schedule'

export const saveRowWorkSchedule = async (
  workScheduleRows: WorkSchedule[]
): Promise<number> => {
  const res = await fetch('http://localhost:3000/api/work-schedules/', {
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
