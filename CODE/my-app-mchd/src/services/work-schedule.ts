import 'server-only'

import prisma from '@/src/libs/db'
import { morningRow, afternoonRow } from '@/src/models/work-schedule'
import { TCAHORARIOST } from '@prisma/client'

export async function createWorkSchedule(idMatrix: number) {
  await prisma.tCAHORARIOST.createMany({
    data: [morningRow(idMatrix), afternoonRow(idMatrix)],
  })
}

export async function updateWorkSchedule(newData: TCAHORARIOST) {
  const data: TCAHORARIOST = await prisma.tCAHORARIOST.update({
    where: { TCAHORARIOST_ID: newData.TCAHORARIOST_ID },
    data: { ...newData },
  })
  return data
}
