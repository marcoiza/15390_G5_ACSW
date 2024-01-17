export interface TCAHORARIOST {
  TCAHORARIOST_ID?: number
  TCAMATRICES_ID: number
  TCAHORARIOST_JORNADA?: string | null
  REGISTRO_HT?: string | null
  TCAHORARIOST_BIOMETRICO: string | null
  TCAHORARIOST_LUNES?: Date | null
  TCAHORARIOST_MARTES?: Date | null
  TCAHORARIOST_MIERCOLES?: Date | null
  TCAHORARIOST_JUEVES?: Date | null
  TCAHORARIOST_VIERNES?: Date | null
}

export function initRow1(idMatrix: number): TCAHORARIOST {
  return {
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Matutina',
    REGISTRO_HT: 'Ingreso',
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
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Matutina',
    REGISTRO_HT: 'Salida',
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
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Vespertina',
    REGISTRO_HT: 'Ingreso',
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
    TCAMATRICES_ID: idMatrix,
    TCAHORARIOST_JORNADA: 'Vespertina',
    REGISTRO_HT: 'Salida',
    TCAHORARIOST_BIOMETRICO: 'fisico',
    TCAHORARIOST_LUNES: null,
    TCAHORARIOST_MARTES: null,
    TCAHORARIOST_MIERCOLES: null,
    TCAHORARIOST_JUEVES: null,
    TCAHORARIOST_VIERNES: null,
  }
}
