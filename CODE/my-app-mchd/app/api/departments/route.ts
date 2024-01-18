import { NextResponse } from 'next/server'
import type { TCADEPARTAMENTOS } from '@prisma/client'
import prisma from '@/src/libs/db'

export async function GET() {
  const data: TCADEPARTAMENTOS[] = await prisma.tCADEPARTAMENTOS.findMany()
  return NextResponse.json(data, { status: 200 })
}
