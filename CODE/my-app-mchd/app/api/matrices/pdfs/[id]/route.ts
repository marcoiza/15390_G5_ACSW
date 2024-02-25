import { readFileSync } from 'fs'
import { NextRequest } from 'next/server'
import prisma from '@/src/libs/db'

const path = '/home/kevin/Coding/15390_G5_ACSW/CODE/my-app-mchd/files'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const id = params.id
  const matrix = await prisma.tCAMATRICES.findUnique({
    where: { TCAMATRICES_ID: Number(id) },
  })
  let file: Buffer = Buffer.from('')
  switch (matrix?.TCAMATRICES_ESTADO) {
    case 'e':
      file = readFileSync(`${path}/received/${id}.pdf`)
      break
    case 'a':
      file = readFileSync(`${path}/approved/${id}.pdf`)
      break
    case 'r':
      file = readFileSync(`${path}/rejected/${id}.pdf`)
      break
  }
  return new Response(file, { headers: { 'Content-Type': 'application/pdf' } })
}
