import { NextResponse } from 'next/server'
import type { TCAPERIODOSA } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(async () => {
  const data: TCAPERIODOSA[] = await prisma.tCAPERIODOSA.findMany()
  return NextResponse.json(data, { status: 200 })
})
