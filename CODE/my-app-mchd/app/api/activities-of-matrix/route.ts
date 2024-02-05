import { NextRequest, NextResponse } from 'next/server'
import { TCAACTIVIDADESD } from '@prisma/client'
import {
  addActInMatrix,
  updateActInMatrix,
} from '@/src/services/activities-of-matrix'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const newActForMatrix: TCAACTIVIDADESD = await req.json()
  const activitiesByMatrix = await addActInMatrix(newActForMatrix)
  return NextResponse.json(activitiesByMatrix, { status: 201 })
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  const newActForMatrix: TCAACTIVIDADESD = await req.json()
  const activitiesByMatrix = await updateActInMatrix(newActForMatrix)
  return NextResponse.json(activitiesByMatrix, { status: 200 })
}
