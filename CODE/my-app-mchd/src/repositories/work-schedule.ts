import 'server-only'

import prisma from '@/src/libs/db'
import { TCAHORARIOST } from '@prisma/client'
import {
  initRow1,
  initRow2,
  initRow3,
  initRow4,
} from '@/src/models/work-schedule'

export async function createWorkSchedule(idMatrix: number) {
  await prisma.tCAHORARIOST.createMany({
    data: [
      initRow1(idMatrix),
      initRow2(idMatrix),
      initRow3(idMatrix),
      initRow4(idMatrix),
    ],
  })
}

export async function updateWorkSchedule(newData: TCAHORARIOST[]) {
  await prisma.tCAHORARIOST.update({
    where: { TCAHORARIOST_ID: newData[0].TCAHORARIOST_ID },
    data: newData[0],
  })
  await prisma.tCAHORARIOST.update({
    where: { TCAHORARIOST_ID: newData[1].TCAHORARIOST_ID },
    data: newData[1],
  })
  await prisma.tCAHORARIOST.update({
    where: { TCAHORARIOST_ID: newData[2].TCAHORARIOST_ID },
    data: newData[2],
  })
  await prisma.tCAHORARIOST.update({
    where: { TCAHORARIOST_ID: newData[3].TCAHORARIOST_ID },
    data: newData[3],
  })
}
