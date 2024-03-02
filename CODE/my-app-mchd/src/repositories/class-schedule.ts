import type { TCAHORARIOSC } from '@prisma/client'
import prisma from '@/src/libs/db'

export async function createRowClassSchedule(
  newRowClassSchedule: TCAHORARIOSC
): Promise<TCAHORARIOSC> {
  const { TCAHORARIOSC_ID, ...body } = newRowClassSchedule
  console.log('body', body)
  return await prisma.tCAHORARIOSC.create({ data: body })
}
