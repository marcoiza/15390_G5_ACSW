import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/src/libs/db'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = Number(params.id)
  const rowDeleted = await prisma.tCAHORARIOSC.delete({
    where: { TCAHORARIOSC_ID: id },
  })
  const classSchedule = await prisma.tCAHORARIOSC.findMany({
    where: { TCAMATRICES_ID: rowDeleted.TCAMATRICES_ID },
  })
  return NextResponse.json(classSchedule, { status: 200 })
}
