import { TCAMATRICES } from '@prisma/client'

export function InitialMatrix(
  codPeriod: number,
  idBanner: string
): TCAMATRICES {
  return {
    TCAMATRICES_ID: 0,
    TCAPERIODOSA_CODIGO: codPeriod,
    TCADOCENTES_ID_BANNER: idBanner,
    TCAFIRMASA_ID_BANNER: '1',
    TCAMATRICES_IMPARTIR_CLASE: null,
    TCAMATRICES_DOCENCIA: null,
    TCAMATRICES_INVESTIGACION: null,
    TCAMATRICES_GESTION_EDUCATIVA: null,
    TCAMATRICES_VINCULACION: null,
    TCAMATRICES_HORAS_EXC: null,
    TCAMATRICES_MOTIVO_HORAS_EXC: null,
    TCAMATRICES_FECHA_CREACION: new Date(),
    TCAMATRICES_FECHA_ACTUALIZACION: new Date(),
  }
}
