import { TCAHORARIOST } from '@prisma/client'

// export function isHoursValid(
//   morning: TCAHORARIOST,
//   afternoon: TCAHORARIOST
// ): boolean {
//   const isValidMondayHours = validateHoursForDay(
//     morning.TCAHORARIOST_LUNES_INGRESO,
//     morning.TCAHORARIOST_LUNES_SALIDA,
//     afternoon.TCAHORARIOST_LUNES_INGRESO,
//     afternoon.TCAHORARIOST_LUNES_SALIDA
//   )

//   const isValidTuesdayHours = validateHoursForDay(
//     morning.TCAHORARIOST_MARTES_INGRESO,
//     morning.TCAHORARIOST_MARTES_SALIDA,
//     afternoon.TCAHORARIOST_MARTES_INGRESO,
//     afternoon.TCAHORARIOST_MARTES_SALIDA
//   )

//   const isValidWednesdayHours = validateHoursForDay(
//     morning.TCAHORARIOST_MIERCOLES_INGRESO,
//     morning.TCAHORARIOST_MIERCOLES_SALIDA,
//     afternoon.TCAHORARIOST_MIERCOLES_INGRESO,
//     afternoon.TCAHORARIOST_MIERCOLES_SALIDA
//   )

//   const isValidThursdayHours = validateHoursForDay(
//     morning.TCAHORARIOST_JUEVES_INGRESO,
//     morning.TCAHORARIOST_JUEVES_SALIDA,
//     afternoon.TCAHORARIOST_JUEVES_INGRESO,
//     afternoon.TCAHORARIOST_JUEVES_SALIDA
//   )

//   const isValidFridayHours = validateHoursForDay(
//     morning.TCAHORARIOST_VIERNES_INGRESO,
//     morning.TCAHORARIOST_VIERNES_SALIDA,
//     afternoon.TCAHORARIOST_VIERNES_INGRESO,
//     afternoon.TCAHORARIOST_VIERNES_SALIDA
//   )
//   return (
//     isValidMondayHours &&
//     isValidTuesdayHours &&
//     isValidWednesdayHours &&
//     isValidThursdayHours &&
//     isValidFridayHours
//   )
// }

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
