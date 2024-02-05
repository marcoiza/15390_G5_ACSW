import { NextRequest, NextResponse } from 'next/server'
import { deleteActivityOfMatrix } from '@/src/services/activities-of-matrix'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const activitiesByMatrix = await deleteActivityOfMatrix(Number(params.id))
  return NextResponse.json(activitiesByMatrix, { status: 200 })
}
