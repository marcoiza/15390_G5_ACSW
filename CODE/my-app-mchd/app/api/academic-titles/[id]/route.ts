import { NextRequest, NextResponse } from 'next/server'
import type AcademicTitle from '@/src/interfaces/academic-title'
import prisma from '@/src/lib/db'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const data: AcademicTitle | null = await prisma.tCATITULOSA.findUnique({
    where: { TCATITULOSA_ID: id },
  })
  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
  const newData = await req.json()
  const data: AcademicTitle = await prisma.tCATITULOSA.create({
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
  const data: AcademicTitle | null = await prisma.tCATITULOSA.update({
    where: { TCATITULOSA_ID: id },
    data: newData,
  })
  return NextResponse.json(data, { status: 200 })
}
