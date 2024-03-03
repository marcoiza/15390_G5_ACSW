import { NextRequest, NextResponse } from 'next/server'
import { updateWorkSchedule } from '@/src/services/work-schedule'
import withErrorHandler from '@/src/libs/error-handler'
import { TCAHORARIOST } from '@prisma/client'

export const PUT = withErrorHandler(async (req: NextRequest) => {
  const newData: TCAHORARIOST = await req.json()
  await updateWorkSchedule(newData)
  return NextResponse.json({ message: 'updated' }, { status: 200 })
})

export const DELETE = withErrorHandler(async (req: NextRequest) => {
  const newData: TCAHORARIOST = await req.json()
  await updateWorkSchedule(newData)
  return NextResponse.json({ message: 'deleted' }, { status: 200 })
})
