import { NextRequest, NextResponse } from 'next/server'
import type TCAMATRICES from '@/src/models/matrix'
import prisma from '@/src/libs/db'
import { initRow1, initRow2, initRow3, initRow4 } from '@/src/models/work-schedule'

export async function GET() {
  const data: TCAMATRICES[] = await prisma.tCAMATRICES.findMany()
  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
  const newData = await req.json()
  const data: TCAMATRICES = await prisma.tCAMATRICES.create({
    data: newData,
  })
  const workSchedule = await prisma.tCAHORARIOST.createMany({
    data: [
      initRow1(data.TCAMATRICES_ID ?? 1),
      initRow2(data.TCAMATRICES_ID ?? 1),
      initRow3(data.TCAMATRICES_ID ?? 1),
      initRow4(data.TCAMATRICES_ID ?? 1),
    ],
  })
  return NextResponse.json(data, { status: 201 })
}
