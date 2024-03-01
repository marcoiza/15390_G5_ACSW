import withErrorHandler from '@/src/libs/error-handler'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/src/libs/db'
import type { TCAMATRICES } from '@prisma/client'

export const PUT = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const observation: { TCAMATRICES_OBSERVACION: string } = await req.json()
    const data: TCAMATRICES | null = await prisma.tCAMATRICES.update({
      where: { TCAMATRICES_ID: id },
      data: observation,
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Updated' }, { status: 200 })
  }
)
