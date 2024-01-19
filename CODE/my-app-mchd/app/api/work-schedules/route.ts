import { NextRequest, NextResponse } from 'next/server'
import type { TCAHORARIOST } from '@prisma/client'
import prisma from '@/src/libs/db'
import { updateWorkSchedule } from '@/src/repositories/work-schedule'

export async function POST(req: NextRequest) {
  const newData = await req.json()
  const data = await prisma.tCAHORARIOST.createMany({
    data: newData,
  })
  return NextResponse.json(data.count, { status: 201 })
}

export async function PUT(req: NextRequest) {
  const newData: TCAHORARIOST[] = await req.json()
  await updateWorkSchedule(newData)
  return NextResponse.json({ message: 'updated' }, { status: 200 })
}
