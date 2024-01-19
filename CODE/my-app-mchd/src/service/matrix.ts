import 'server-only'

import { TCAMATRICES } from '@prisma/client'
import { createMatrix } from '@/src/repositories/matrix'
import { createWorkSchedule } from '@/src/repositories/work-schedule'

export async function createMatrixTemplate(
  newMatrix: TCAMATRICES
): Promise<number> {
  const idMatrix = await createMatrix(newMatrix)
  createWorkSchedule(idMatrix)
  return idMatrix
}
