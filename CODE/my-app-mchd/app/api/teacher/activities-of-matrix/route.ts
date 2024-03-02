import { NextRequest, NextResponse } from 'next/server'
import { TCAACTIVIDADESD } from '@prisma/client'
import {
  addActInMatrix,
  updateActInMatrix,
} from '@/src/services/activities-of-matrix'
import withErrorHandler from '@/src/libs/error-handler'

export const POST = withErrorHandler(
  async (req: NextRequest): Promise<NextResponse> => {
    const newActForMatrix: TCAACTIVIDADESD = await req.json()
    const activityByMatrix: TCAACTIVIDADESD | null = await addActInMatrix(
      newActForMatrix
    )
    return NextResponse.json(activityByMatrix, { status: 201 })
  }
)

export const PUT = withErrorHandler(
  async (req: NextRequest): Promise<NextResponse> => {
    const newActOfMatrix: TCAACTIVIDADESD = await req.json()
    const activityOfMatrix: TCAACTIVIDADESD | null = await updateActInMatrix(
      newActOfMatrix
    )
    if (!activityOfMatrix) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 })
    }
    return NextResponse.json(activityOfMatrix, { status: 200 })
  }
)
