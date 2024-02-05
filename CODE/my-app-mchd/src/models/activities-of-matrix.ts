export function initActivityOfMatrix(idMatrix: number, codActivity: string) {
  return {
    TCAACTIVIDADESD_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAACTIVIDADES_CODIGO: codActivity,
    TCAACTIVIDADESD_HS: null,
    TCAACTIVIDADESD_HSP: null,
    TCAACTIVIDADES: {
      TCAACTIVIDADES_DESCRIPCION: '',
      TCAACTIVIDADES_OBLIGATORIA: false,
    },
  }
}
