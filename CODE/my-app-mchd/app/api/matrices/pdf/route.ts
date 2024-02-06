import { NextRequest, NextResponse } from 'next/server'
import type { TCAMATRICES } from '@prisma/client'
import prisma from '@/src/libs/db'
import { createMatrixTemplate } from '@/src/services/matrix'

export async function GET() {
  const data: TCAMATRICES[] = await prisma.tCAMATRICES.findMany()
  return NextResponse.json(data, { status: 200 })
}
