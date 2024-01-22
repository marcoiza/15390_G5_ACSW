import 'server-only'

import prisma from '@/src/libs/db'
import type { TCAACTIVIDADES, TCAHORARIOSC, TCAMATRICES } from '@prisma/client'
import type { TCADOCENTES } from '@prisma/client'
import type { TCATITULOSA } from '@prisma/client'
import { TCAHORARIOST } from '@prisma/client'
import type { TCAPERIODOSA } from '@prisma/client'
import { as } from 'vitest/dist/reporters-O4LBziQ_.js'

export async function getMatrix(idBanner: string): Promise<TCAMATRICES | null> {
  const res = await prisma.tCAMATRICES.findFirst({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

export async function getWorkSchedule(
  idMatrix: number
): Promise<TCAHORARIOST[]> {
  const res = await prisma.tCAHORARIOST.findMany({
    where: { TCAMATRICES_ID: idMatrix },
  })
  return res
}

export async function getClassSchedule(
  idMatrix: number
): Promise<TCAHORARIOSC[]> {
  const res = await prisma.tCAHORARIOSC.findMany({
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
): Promise<TCATITULOSA[]> {
  const res = await prisma.tCATITULOSA.findMany({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}

export async function getAcademicPeriods(): Promise<TCAPERIODOSA[]> {
  const res = await prisma.tCAPERIODOSA.findMany()
  return res
}

export async function getMandatoryActivities(): Promise<TCAACTIVIDADES[]> {
  const res = await prisma.tCAACTIVIDADES.findMany({
    where: { TCAACTIVIDADES_OBLIGATORIA: true },
  })
  return res
}
