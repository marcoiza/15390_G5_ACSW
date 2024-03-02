import { NextRequest, NextResponse } from 'next/server'
import fs from 'node:fs/promises'
import prisma from '@/src/libs/db'

const path = '/home/kevin/Coding/15390_G5_ACSW/CODE/my-app-mchd/files'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = Number(params.id)
  const oldPath = `${path}/received/${id}.pdf`
  const newPath = `${path}/approved/${id}.pdf`
  await fs.rename(oldPath, newPath)
  await prisma.tCAMATRICES.update({
    where: { TCAMATRICES_ID: id },
    data: { TCAMATRICES_ESTADO: 'a' },
  })
  return NextResponse.json({ message: 'matrix approved' }, { status: 200 })
}
