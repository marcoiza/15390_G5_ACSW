import { NextRequest, NextResponse } from 'next/server'
import type { TCAMATRICES } from '@prisma/client'
import prisma from '@/src/libs/db'
import { createMatrixTemplate } from '@/src/service/matrix'

export async function GET() {
  const data: TCAMATRICES[] = await prisma.tCAMATRICES.findMany()
  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const newData = await req.json()
  const idMatrix: number = await createMatrixTemplate(newData)
  return NextResponse.json({ TCAMATRICES_ID: idMatrix }, { status: 201 })
}
