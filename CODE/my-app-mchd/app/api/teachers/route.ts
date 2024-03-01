import { NextResponse } from 'next/server'
import type { TCADOCENTES } from '@prisma/client'
import prisma from '@/src/libs/db'
import withErrorHandler from '@/src/libs/error-handler'

export const GET = withErrorHandler(async () => {
  const data: TCADOCENTES[] = await prisma.tCADOCENTES.findMany()
  return NextResponse.json(data, { status: 200 })
})
