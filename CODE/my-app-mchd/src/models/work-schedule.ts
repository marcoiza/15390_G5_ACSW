import type { TCAHORARIOST } from '@prisma/client'

export function initRow1(idMatrix: number): TCAHORARIOST {
  return {
    TCAHORARIOST_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Matutina',
    TCAHORARIOST_REGISTRO: 'Ingreso',
    TCAHORARIOST_BIOMETRICO: 'fisico',
    TCAHORARIOST_LUNES: null,
    TCAHORARIOST_MARTES: null,
    TCAHORARIOST_MIERCOLES: null,
    TCAHORARIOST_JUEVES: null,
    TCAHORARIOST_VIERNES: null,
  }
}

export function initRow2(idMatrix: number): TCAHORARIOST {
  return {
    TCAHORARIOST_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Matutina',
    TCAHORARIOST_REGISTRO: 'Salida',
    TCAHORARIOST_BIOMETRICO: 'fisico',
    TCAHORARIOST_LUNES: null,
    TCAHORARIOST_MARTES: null,
    TCAHORARIOST_MIERCOLES: null,
    TCAHORARIOST_JUEVES: null,
    TCAHORARIOST_VIERNES: null,
  }
}

export function initRow3(idMatrix: number): TCAHORARIOST {
  return {
    TCAHORARIOST_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Vespertina',
    TCAHORARIOST_REGISTRO: 'Ingreso',
    TCAHORARIOST_BIOMETRICO: 'fisico',
    TCAHORARIOST_LUNES: null,
    TCAHORARIOST_MARTES: null,
    TCAHORARIOST_MIERCOLES: null,
    TCAHORARIOST_JUEVES: null,
    TCAHORARIOST_VIERNES: null,
  }
}

export function initRow4(idMatrix: number): TCAHORARIOST {
  return {
    TCAHORARIOST_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Vespertina',
    TCAHORARIOST_REGISTRO: 'Salida',
    TCAHORARIOST_BIOMETRICO: 'fisico',
    TCAHORARIOST_LUNES: null,
    TCAHORARIOST_MARTES: null,
    TCAHORARIOST_MIERCOLES: null,
    TCAHORARIOST_JUEVES: null,
    TCAHORARIOST_VIERNES: null,
  }
}
