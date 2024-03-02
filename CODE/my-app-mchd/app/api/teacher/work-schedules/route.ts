import { NextRequest, NextResponse } from 'next/server'
import { updateWorkSchedule } from '@/src/services/work-schedule'
import withErrorHandler from '@/src/libs/error-handler'
import { DayProps } from '@/src/models/work-schedule'
import { TCAHORARIOST } from '@prisma/client'

export const PUT = withErrorHandler(async (req: NextRequest) => {
  const newData: DayProps = await req.json()
  const data: TCAHORARIOST = await updateWorkSchedule(newData)
  return NextResponse.json(data, { status: 200 })
})
