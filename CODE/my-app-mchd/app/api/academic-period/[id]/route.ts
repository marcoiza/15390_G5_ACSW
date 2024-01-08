import { NextRequest, NextResponse } from 'next/server'
import type AcademicPeriod from '@/src/interfaces/academic-period'
import prisma from '@/src/lib/db'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const data: AcademicPeriod | null = await prisma.tCAPERIODOSA.findUnique({
    where: { TCAPERIODOSA_CODIGO: id },
  })
  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
  const newData = await req.json()
  const data: AcademicPeriod = await prisma.tCAPERIODOSA.create({
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
  const data: AcademicPeriod | null = await prisma.tCAPERIODOSA.update({
    where: { TCAPERIODOSA_CODIGO: id },
    data: newData,
  })
  return NextResponse.json(data, { status: 200 })
}