import { NextRequest, NextResponse } from 'next/server'
import type { TCAMATRICES } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const data: TCAMATRICES | null = await prisma.tCAMATRICES.findUnique({
      where: { TCAMATRICES_ID: id },
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)

export const PUT = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const newData = await req.json()
    const data: TCAMATRICES | null = await prisma.tCAMATRICES.update({
      where: { TCAMATRICES_ID: id },
      data: newData,
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)
