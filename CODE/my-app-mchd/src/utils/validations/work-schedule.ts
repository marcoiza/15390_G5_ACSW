import { TCAHORARIOST } from '@prisma/client'

export function isHoursValid(workScheduleRows: TCAHORARIOST[]): boolean {
  const isValidMondayHours = validateHoursForDay(
    workScheduleRows[0].TCAHORARIOST_LUNES,
    workScheduleRows[1].TCAHORARIOST_LUNES,
    workScheduleRows[2].TCAHORARIOST_LUNES,
    workScheduleRows[3].TCAHORARIOST_LUNES
  )

  const isValidTuesdayHours = validateHoursForDay(
    workScheduleRows[0].TCAHORARIOST_MARTES,
    workScheduleRows[1].TCAHORARIOST_MARTES,
    workScheduleRows[2].TCAHORARIOST_MARTES,
    workScheduleRows[3].TCAHORARIOST_MARTES
  )

  const isValidWednesdayHours = validateHoursForDay(
    workScheduleRows[0].TCAHORARIOST_MIERCOLES,
    workScheduleRows[1].TCAHORARIOST_MIERCOLES,
    workScheduleRows[2].TCAHORARIOST_MIERCOLES,
    workScheduleRows[3].TCAHORARIOST_MIERCOLES
  )

  const isValidThursdayHours = validateHoursForDay(
    workScheduleRows[0].TCAHORARIOST_JUEVES,
    workScheduleRows[1].TCAHORARIOST_JUEVES,
    workScheduleRows[2].TCAHORARIOST_JUEVES,
    workScheduleRows[3].TCAHORARIOST_JUEVES
  )

  const isValidFridayHours = validateHoursForDay(
    workScheduleRows[0].TCAHORARIOST_VIERNES,
    workScheduleRows[1].TCAHORARIOST_VIERNES,
    workScheduleRows[2].TCAHORARIOST_VIERNES,
    workScheduleRows[3].TCAHORARIOST_VIERNES
  )
  return (
    isValidMondayHours &&
    isValidTuesdayHours &&
    isValidWednesdayHours &&
    isValidThursdayHours &&
    isValidFridayHours
  )
}

export function validateHoursForDay(
  morningEntry: Date | null,
  morningExit: Date | null,
  afternoonEntry: Date | null,
  afternoonExit: Date | null
): boolean {
  const maxMins = 480
  let minsMorningEntry =
    (morningEntry?.getHours() ?? 0) * 60 + (morningEntry?.getMinutes() ?? 0)
  let minsMorningExit =
    (morningExit?.getHours() ?? 0) * 60 + (morningExit?.getMinutes() ?? 0)
  let minsAfternoonEntry =
    (afternoonEntry?.getHours() ?? 0) * 60 + (afternoonEntry?.getMinutes() ?? 0)
  let minsAfternoonExit =
    (afternoonExit?.getHours() ?? 0) * 60 + (afternoonExit?.getMinutes() ?? 0)
  let minsDay =
    minsMorningExit - minsMorningEntry + minsAfternoonExit - minsAfternoonEntry
  return minsDay <= maxMins && minsDay >= 0
}
