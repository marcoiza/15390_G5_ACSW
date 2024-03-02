import { NextRequest, NextResponse } from 'next/server'
import type { TCATITULOSA } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const data: TCATITULOSA | null = await prisma.tCATITULOSA.findUnique({
      where: { TCATITULOSA_ID: id },
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)

export const POST = withErrorHandler(async (req: NextRequest) => {
  const newData = await req.json()
  const data: TCATITULOSA = await prisma.tCATITULOSA.create({
    data: newData,
  })
  return NextResponse.json(data, { status: 201 })
})

export const PUT = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const newData = await req.json()
    const data: TCATITULOSA | null = await prisma.tCATITULOSA.update({
      where: { TCATITULOSA_ID: id },
      data: newData,
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)
