import type { TCAHORARIOST } from '@prisma/client'

export function morningRow(idMatrix: number): TCAHORARIOST {
  return {
    TCAHORARIOST_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Matutina',
    TCAHORARIOST_LUNES_INGRESO: '',
    TCAHORARIOST_LUNES_SALIDA: '',
    TCAHORARIOST_LUNES_BIOMETRICO: '',
    TCAHORARIOST_MARTES_INGRESO: '',
    TCAHORARIOST_MARTES_SALIDA: '',
    TCAHORARIOST_MARTES_BIOMETRICO: '',
    TCAHORARIOST_MIERCOLES_INGRESO: '',
    TCAHORARIOST_MIERCOLES_SALIDA: '',
    TCAHORARIOST_MIERCOLES_BIOMETRICO: '',
    TCAHORARIOST_JUEVES_INGRESO: '',
    TCAHORARIOST_JUEVES_SALIDA: '',
    TCAHORARIOST_JUEVES_BIOMETRICO: '',
    TCAHORARIOST_VIERNES_INGRESO: '',
    TCAHORARIOST_VIERNES_SALIDA: '',
    TCAHORARIOST_VIERNES_BIOMETRICO: '',
  }
}

export function afternoonRow(idMatrix: number): TCAHORARIOST {
  return {
    TCAHORARIOST_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Vespertina',
    TCAHORARIOST_LUNES_INGRESO: '',
    TCAHORARIOST_LUNES_SALIDA: '',
    TCAHORARIOST_LUNES_BIOMETRICO: '',
    TCAHORARIOST_MARTES_INGRESO: '',
    TCAHORARIOST_MARTES_SALIDA: '',
    TCAHORARIOST_MARTES_BIOMETRICO: '',
    TCAHORARIOST_MIERCOLES_INGRESO: '',
    TCAHORARIOST_MIERCOLES_SALIDA: '',
    TCAHORARIOST_MIERCOLES_BIOMETRICO: '',
    TCAHORARIOST_JUEVES_INGRESO: '',
    TCAHORARIOST_JUEVES_SALIDA: '',
    TCAHORARIOST_JUEVES_BIOMETRICO: '',
    TCAHORARIOST_VIERNES_INGRESO: '',
    TCAHORARIOST_VIERNES_SALIDA: '',
    TCAHORARIOST_VIERNES_BIOMETRICO: '',
  }
}

export type Days = 'LUNES' | 'MARTES' | 'MIERCOLES' | 'JUEVES' | 'VIERNES'
