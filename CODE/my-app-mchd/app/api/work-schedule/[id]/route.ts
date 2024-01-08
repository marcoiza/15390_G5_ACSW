import { NextRequest, NextResponse } from 'next/server'
import type WorkSchedule from '@/src/interfaces/work-schedule'
import prisma from '@/src/lib/db'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const data: WorkSchedule | null = await prisma.tCAHORARIOST.findUnique({
    where: { TCAHORARIOST_ID: id },
  })
  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
  const newData = await req.json()
  const data: WorkSchedule = await prisma.tCAHORARIOST.create({
    data: newData,
  })
  return NextResponse.json(data, { status: 201 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const newData = await req.json()
  const data: WorkSchedule | null = await prisma.tCAHORARIOST.update({
    where: { TCAHORARIOST_ID: id },
    data: newData,
  })
  return NextResponse.json(data, { status: 200 })
}
