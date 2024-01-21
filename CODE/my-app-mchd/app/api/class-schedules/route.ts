import { NextRequest, NextResponse } from 'next/server'
import type { TCAHORARIOSC } from '@prisma/client'
import prisma from '@/src/libs/db'
import { createRowClassSchedule } from '@/src/repositories/class-schedule'

export async function GET() {
  const data: TCAHORARIOSC[] = await prisma.tCAHORARIOSC.findMany()
  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const newData: TCAHORARIOSC = await req.json()
  const rowSaved = await createRowClassSchedule(newData)
  const classSchedule = await prisma.tCAHORARIOSC.findMany({
    where: { TCAMATRICES_ID: rowSaved.TCAMATRICES_ID },
  })
  return NextResponse.json(classSchedule, { status: 201 })
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  const newData: TCAHORARIOSC = await req.json()
  const rowUpdated = await prisma.tCAHORARIOSC.update({
    where: { TCAHORARIOSC_ID: newData.TCAHORARIOSC_ID },
    data: newData,
  })
  const classSchedule = await prisma.tCAHORARIOSC.findMany({
    where: { TCAMATRICES_ID: rowUpdated.TCAMATRICES_ID },
  })
  return NextResponse.json(classSchedule, { status: 200 })
}
