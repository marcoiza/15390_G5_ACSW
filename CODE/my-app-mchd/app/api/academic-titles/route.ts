import { NextResponse } from 'next/server'
import type { TCATITULOSA } from '@prisma/client'
import prisma from '@/src/libs/db'

export async function GET() {
  const data: TCATITULOSA[] = await prisma.tCATITULOSA.findMany()
  return NextResponse.json(data, { status: 200 })
}
