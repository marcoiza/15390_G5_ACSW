import { NextResponse } from 'next/server'
import type { TCADEPARTAMENTOS } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(async () => {
  const data: TCADEPARTAMENTOS[] = await prisma.tCADEPARTAMENTOS.findMany()
  return NextResponse.json(data, { status: 200 })
})
