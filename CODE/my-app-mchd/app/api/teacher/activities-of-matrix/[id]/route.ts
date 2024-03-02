import { NextRequest, NextResponse } from 'next/server'
import { deleteActivityOfMatrix } from '@/src/services/activities-of-matrix'
import withErrorHandler from '@/src/libs/error-handler'

export const DELETE = withErrorHandler(
  async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ): Promise<NextResponse> => {
    await deleteActivityOfMatrix(Number(params.id))
    return NextResponse.json({ message: 'deleted' }, { status: 200 })
  }
)
