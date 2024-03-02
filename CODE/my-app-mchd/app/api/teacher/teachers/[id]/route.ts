import { NextRequest, NextResponse } from 'next/server'
import type { TCADOCENTES } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = params.id
    const data: TCADOCENTES | null = await prisma.tCADOCENTES.findUnique({
      where: { TCADOCENTES_ID_BANNER: id },
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)

export const POST = withErrorHandler(async (req: NextRequest) => {
  const newData = await req.json()
  const data: TCADOCENTES = await prisma.tCADOCENTES.create({
    data: newData,
  })
  return NextResponse.json(data, { status: 201 })
})

export const PUT = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = params.id
    const newData = await req.json()
    const data: TCADOCENTES | null = await prisma.tCADOCENTES.update({
      where: { TCADOCENTES_ID_BANNER: id },
      data: newData,
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)
