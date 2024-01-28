import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/src/libs/db'
import { TCAACTIVIDADESD } from '@prisma/client'
import { getActivitiesByMatrix } from '@/app/actions'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const newData: TCAACTIVIDADESD = await req.json()
  const { TCAACTIVIDADESD_ID, ...rest } = newData
  const savedData = await prisma.tCAACTIVIDADESD.create({
    data: { ...rest },
  })
  const typeAct = await prisma.tCAACTIVIDADES.findUnique({
    where: { TCAACTIVIDADES_CODIGO: savedData.TCAACTIVIDADES_CODIGO },
    select: { TCAACTIVIDADES_TIPO: true },
  })
  const activitiesByMatrix = await getActivitiesByMatrix(
    newData.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return NextResponse.json(activitiesByMatrix, { status: 201 })
}

export async function PUT(
  req: NextRequest,
): Promise<NextResponse> {
  const newData: TCAACTIVIDADESD = await req.json()
  const updatedData = await prisma.tCAACTIVIDADESD.update({
    where: { TCAACTIVIDADESD_ID: newData.TCAACTIVIDADESD_ID },
    data: { ...newData },
  })
  const typeAct = await prisma.tCAACTIVIDADES.findUnique({
    where: { TCAACTIVIDADES_CODIGO: updatedData.TCAACTIVIDADES_CODIGO },
    select: { TCAACTIVIDADES_TIPO: true },
  })
  const activitiesByMatrix = await getActivitiesByMatrix(
    newData.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return NextResponse.json(activitiesByMatrix, { status: 200 })
}
