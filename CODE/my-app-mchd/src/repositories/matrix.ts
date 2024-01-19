import 'server-only'

import { TCAMATRICES } from '@prisma/client'
import prisma from '@/src/libs/db'

export async function createMatrix(newMatrix: TCAMATRICES): Promise<number> {
  const { TCAMATRICES_ID, ...matrixBody } = newMatrix
  const matrixSaved: TCAMATRICES = await prisma.tCAMATRICES.create({
    data: { ...matrixBody },
  })
  return matrixSaved.TCAMATRICES_ID
}
