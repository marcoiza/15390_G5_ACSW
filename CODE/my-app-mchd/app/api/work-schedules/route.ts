import { NextRequest, NextResponse } from 'next/server'
import type { TCAHORARIOST } from '@/src/models/work-schedule'
import prisma from '@/src/libs/db'

export async function POST(req: NextRequest) {
  const newData = await req.json()
  const data = await prisma.tCAHORARIOST.createMany({
    data: newData,
  })
  return NextResponse.json(data.count, { status: 201 })
}

export async function PUT(req: NextRequest) {
  const newData: TCAHORARIOST[] = await req.json()
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
  return NextResponse.json({ message: 'updated' }, { status: 200 })
}
