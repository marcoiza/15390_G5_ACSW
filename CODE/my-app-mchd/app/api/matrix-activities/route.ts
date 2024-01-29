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
  await validateHours(
    rest.TCAMATRICES_ID,
    rest.TCAACTIVIDADESD_HS ?? 0,
    0,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  const activitiesByMatrix = await getActivitiesByMatrix(
    newData.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return NextResponse.json(activitiesByMatrix, { status: 201 })
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  const newData: TCAACTIVIDADESD = await req.json()
  const oldData = await prisma.tCAACTIVIDADESD.findUnique({
    where: { TCAACTIVIDADESD_ID: newData.TCAACTIVIDADESD_ID },
  })
  const updatedData = await prisma.tCAACTIVIDADESD.update({
    where: { TCAACTIVIDADESD_ID: newData.TCAACTIVIDADESD_ID },
    data: { ...newData },
  })
  const typeAct = await prisma.tCAACTIVIDADES.findUnique({
    where: { TCAACTIVIDADES_CODIGO: updatedData.TCAACTIVIDADES_CODIGO },
    select: { TCAACTIVIDADES_TIPO: true },
  })
  validateHours(
    newData.TCAMATRICES_ID,
    newData.TCAACTIVIDADESD_HS ?? 0,
    oldData?.TCAACTIVIDADESD_HS ?? 0,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  const activitiesByMatrix = await getActivitiesByMatrix(
    newData.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return NextResponse.json(activitiesByMatrix, { status: 200 })
}

async function validateHours(
  idMatrix: number,
  hours: number,
  oldHours: number,
  typeAct: string
) {
  const matrix = await prisma.tCAMATRICES.findUnique({
    where: { TCAMATRICES_ID: idMatrix },
  })
  switch (typeAct) {
    case 'doc':
      const res = await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: matrix?.TCAMATRICES_ID },
        data: {
          TCAMATRICES_IMPARTIR_CLASE:
            (matrix?.TCAMATRICES_IMPARTIR_CLASE ?? 0) + hours - oldHours,
        },
      })
      break
    case 'inv':
      await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: matrix?.TCAMATRICES_ID },
        data: {
          TCAMATRICES_INVESTIGACION:
            (matrix?.TCAMATRICES_INVESTIGACION ?? 0) + hours - oldHours,
        },
      })
      break
    case 'ges':
      await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: matrix?.TCAMATRICES_ID },
        data: {
          TCAMATRICES_GESTION_EDUCATIVA:
            (matrix?.TCAMATRICES_GESTION_EDUCATIVA ?? 0) + hours - oldHours,
        },
      })
      break
    case 'vin':
      await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: matrix?.TCAMATRICES_ID },
        data: {
          TCAMATRICES_VINCULACION:
            (matrix?.TCAMATRICES_VINCULACION ?? 0) + hours - oldHours,
        },
      })
      break
    default:
      break
  }
}
