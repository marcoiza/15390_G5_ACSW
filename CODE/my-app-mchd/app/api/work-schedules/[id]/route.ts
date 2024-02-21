import { NextRequest, NextResponse } from 'next/server'
import type { TCAHORARIOST } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const data: TCAHORARIOST | null = await prisma.tCAHORARIOST.findUnique({
      where: { TCAHORARIOST_ID: id },
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)

export const POST = withErrorHandler(async (req: NextRequest) => {
  const newData = await req.json()
  const data: TCAHORARIOST = await prisma.tCAHORARIOST.create({
    data: newData,
  })
  return NextResponse.json(data, { status: 201 })
})

export const PUT = withErrorHandler(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const id = Number(params.id)
    const newData = await req.json()
    const data: TCAHORARIOST | null = await prisma.tCAHORARIOST.update({
      where: { TCAHORARIOST_ID: id },
      data: newData,
    })
    if (!data) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json(data, { status: 200 })
  }
)
