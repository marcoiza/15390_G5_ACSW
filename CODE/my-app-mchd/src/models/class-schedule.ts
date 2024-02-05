import { TCAHORARIOSC } from '@prisma/client'

export function initClassScheduleService(
  idMatrix: number,
  codPeriod: number
): TCAHORARIOSC {
  return {
    TCAHORARIOSC_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOSC_COD_CARRERA: null,
    TCAHORARIOSC_PERIODO: codPeriod,
    TCAHORARIOSC_NRC: null,
    TCAHORARIOSC_ASIGNATURA: null,
    TCAHORARIOSC_TIPO: 'Clase',
    TCAHORARIOSC_LUNES: null,
    TCAHORARIOSC_AULA_LUNES: null,
    TCAHORARIOSC_MARTES: '',
    TCAHORARIOSC_AULA_MARTES: null,
    TCAHORARIOSC_MIERCOLES: null,
    TCAHORARIOSC_AULA_MIERCOLES: null,
    TCAHORARIOSC_JUEVES: null,
    TCAHORARIOSC_AULA_JUEVES: null,
    TCAHORARIOSC_VIERNES: null,
    TCAHORARIOSC_AULA_VIERNES: null,
  }
}
