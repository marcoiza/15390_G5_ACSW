import { NextRequest, NextResponse } from 'next/server'
import type TCATITULOSA from '@/src/models/academic-title'
import prisma from '@/src/libs/db'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const data: TCATITULOSA | null = await prisma.tCATITULOSA.findUnique({
    where: { TCATITULOSA_ID: id },
  })
  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
  const newData = await req.json()
  const data: TCATITULOSA = await prisma.tCATITULOSA.create({
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
  const data: TCATITULOSA | null = await prisma.tCATITULOSA.update({
    where: { TCATITULOSA_ID: id },
    data: newData,
  })
  return NextResponse.json(data, { status: 200 })
}
