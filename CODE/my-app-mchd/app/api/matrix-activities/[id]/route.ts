import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/src/libs/db'
import { TCAACTIVIDADESD } from '@prisma/client'
import { getActivitiesByMatrix } from '@/app/actions'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const deletedData = await prisma.tCAACTIVIDADESD.delete({
    where: { TCAACTIVIDADESD_ID: Number(params.id) },
  })
  const typeAct = await prisma.tCAACTIVIDADES.findUnique({
    where: { TCAACTIVIDADES_CODIGO: deletedData.TCAACTIVIDADES_CODIGO },
    select: { TCAACTIVIDADES_TIPO: true },
  })
  const activitiesByMatrix = await getActivitiesByMatrix(
    deletedData.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return NextResponse.json(activitiesByMatrix, { status: 200 })
}
