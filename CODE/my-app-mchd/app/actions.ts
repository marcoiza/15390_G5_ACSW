import 'server-only'

import prisma from '@/src/libs/db'
import type { TCAMATRICES } from '@prisma/client'
import type { TCADOCENTES } from '@prisma/client'
import type { TCATITULOSA } from '@prisma/client'
import { TCAHORARIOST } from '@prisma/client'
import type { TCAPERIODOSA } from '@prisma/client'

export async function getMatrix(idBanner: string): Promise<TCAMATRICES | null> {
  const res = await prisma.tCAMATRICES.findFirst({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

export async function getWorkSchedule(idMatrix: number) {
  const res: TCAHORARIOST[] = await prisma.tCAHORARIOST.findMany({
    where: { TCAMATRICES_ID: idMatrix },
  })
  return res
}

export async function getTeacher(
  idBanner: string
): Promise<TCADOCENTES | null> {
  const res = await prisma.tCADOCENTES.findUnique({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

export async function getAcademicTitles(
  idBanner: string
): Promise<TCATITULOSA[] | null> {
  const res = await prisma.tCATITULOSA.findMany({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

export async function getAcademicPeriods(): Promise<TCAPERIODOSA[] | null> {
  const res = await prisma.tCAPERIODOSA.findMany()
  return res
}
