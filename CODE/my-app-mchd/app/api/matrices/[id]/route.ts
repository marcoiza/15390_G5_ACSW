import { NextRequest, NextResponse } from 'next/server'
import type TCAMATRICES from '@/src/models/matrix'
import prisma from '@/src/libs/db'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const data: TCAMATRICES | null = await prisma.tCAMATRICES.findUnique({
    where: { TCAMATRICES_ID: id },
  })
  return NextResponse.json(data, { status: 200 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const newData = await req.json()
  const data: TCAMATRICES | null = await prisma.tCAMATRICES.update({
    where: { TCAMATRICES_ID: id },
    data: newData,
  })
  return NextResponse.json(data, { status: 200 })
}
