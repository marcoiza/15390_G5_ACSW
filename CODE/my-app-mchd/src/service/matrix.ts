import 'server-only'

import { TCAMATRICES } from '@prisma/client'
import { createMatrix } from '@/src/repositories/matrix'
import { createWorkSchedule } from '@/src/repositories/work-schedule'
import { addMandatoryActivities } from '../repositories/activities'

export async function createMatrixTemplate(
  newMatrix: TCAMATRICES
): Promise<number> {
  const idMatrix = await createMatrix(newMatrix)
  createWorkSchedule(idMatrix)
  addMandatoryActivities(idMatrix)
  return idMatrix
}
