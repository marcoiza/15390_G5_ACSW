import 'server-only'

import prisma from '@/src/libs/db'
import type { TCAACTIVIDADES, TCAACTIVIDADESD } from '@prisma/client'

export async function addMandatoryActivities(idMatrix: number) {
  const mandatoryActivities: TCAACTIVIDADES[] =
    await prisma.tCAACTIVIDADES.findMany({
      where: {
        TCAACTIVIDADES_OBLIGATORIA: true,
      },
    })
  const relationships = mandatoryActivities.map((activity) => ({
    TCAMATRICES_ID: idMatrix,
    TCAACTIVIDADES_CODIGO: activity.TCAACTIVIDADES_CODIGO,
    TCAACTIVIDADESD_HS: 0,
    TCAACTIVIDADESD_HSP: 0.0,
  }))
  await prisma.tCAACTIVIDADESD.createMany({
    data: relationships,
  })
}
