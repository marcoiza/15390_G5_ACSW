import { NextRequest, NextResponse } from 'next/server'
import type { TCAMATRICES } from '@prisma/client'
import prisma from '@/src/libs/db'
import { createMatrixTemplate } from '@/src/services/matrix'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(async () => {
  const data: TCAMATRICES[] = await prisma.tCAMATRICES.findMany()
  return NextResponse.json(data, { status: 200 })
})

export const POST = withErrorHandler(
  async (req: NextRequest): Promise<NextResponse> => {
    const newData = await req.json()
    const idMatrix: number = await createMatrixTemplate(newData)
    return NextResponse.json({ TCAMATRICES_ID: idMatrix }, { status: 201 })
  }
)
