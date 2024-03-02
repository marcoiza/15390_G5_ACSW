import { NextResponse } from 'next/server'
import type { TCATITULOSA } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(async () => {
  const data: TCATITULOSA[] = await prisma.tCATITULOSA.findMany()
  return NextResponse.json(data, { status: 200 })
})
