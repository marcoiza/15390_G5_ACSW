import { ActivityOfMatrix } from '@/app/actions'

export function InitActivityOfMatrix(
  idMatrix: number,
  codActivity: string
): ActivityOfMatrix {
  return {
    TCAACTIVIDADESD_ID: 0,
    TCAMATRICES_ID: idMatrix,
    TCAACTIVIDADES_CODIGO: codActivity,
    TCAACTIVIDADESD_HS: 0,
    TCAACTIVIDADESD_HSP: 0,
    TCAACTIVIDADES: {
      TCAACTIVIDADES_DESCRIPCION: '',
      TCAACTIVIDADES_OBLIGATORIA: false,
    },
  }
}
