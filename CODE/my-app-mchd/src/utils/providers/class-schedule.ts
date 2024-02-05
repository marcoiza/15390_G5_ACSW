import { getTimeFormat } from '@/src/libs/time-format'
import { TCAHORARIOSC } from '@prisma/client'

interface ClassHours {
  mondayStart: string
  mondayEnd: string
  tuesdayStart: string
  tuesdayEnd: string
  wednesdayStart: string
  wednesdayEnd: string
  thursdayStart: string
  thursdayEnd: string
  fridayStart: string
  fridayEnd: string
}

interface ResponseClassSchedule {
  status: number
  data: TCAHORARIOSC[]
}

export async function postRowClassSchedule(
  rowClassSchedule: TCAHORARIOSC,
  classHours: ClassHours
): Promise<ResponseClassSchedule> {
  const res = await fetch('/api/class-schedules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...rowClassSchedule,
      TCAHORARIOSC_LUNES: getTimeFormat(
        classHours.mondayStart,
        classHours.mondayEnd
      ),
      TCAHORARIOSC_MARTES: getTimeFormat(
        classHours.tuesdayStart,
        classHours.tuesdayEnd
      ),
      TCAHORARIOSC_MIERCOLES: getTimeFormat(
        classHours.wednesdayStart,
        classHours.wednesdayEnd
      ),
      TCAHORARIOSC_JUEVES: getTimeFormat(
        classHours.thursdayStart,
        classHours.thursdayEnd
      ),
      TCAHORARIOSC_VIERNES: getTimeFormat(
        classHours.fridayStart,
        classHours.fridayEnd
      ),
    }),
  })
  return { status: res.status, data: await res.json() }
}

export async function putRowClassSchedule(
  rowClassSchedule: TCAHORARIOSC,
  classHours: ClassHours
): Promise<ResponseClassSchedule> {
  const res = await fetch('/api/class-schedules', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...rowClassSchedule,
      TCAHORARIOSC_LUNES: getTimeFormat(
        classHours.mondayStart,
        classHours.mondayEnd
      ),
      TCAHORARIOSC_MARTES: getTimeFormat(
        classHours.tuesdayStart,
        classHours.tuesdayEnd
      ),
      TCAHORARIOSC_MIERCOLES: getTimeFormat(
        classHours.wednesdayStart,
        classHours.wednesdayEnd
      ),
      TCAHORARIOSC_JUEVES: getTimeFormat(
        classHours.thursdayStart,
        classHours.thursdayEnd
      ),
      TCAHORARIOSC_VIERNES: getTimeFormat(
        classHours.fridayStart,
        classHours.fridayEnd
      ),
    }),
  })
  return { status: res.status, data: await res.json() }
}

export async function deleteRowClassSchedule(
  idRowClassSchedule: number
): Promise<ResponseClassSchedule> {
  const res = await fetch('/api/class-schedules/' + idRowClassSchedule, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return { status: res.status, data: await res.json() }
}
