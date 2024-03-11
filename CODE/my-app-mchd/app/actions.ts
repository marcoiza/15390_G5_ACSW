'use server'

import prisma from '@/src/libs/db'
import { MatrixForPDF } from '@/src/models/matrix'
import type {
  TCAACTIVIDADES,
  TCAACTIVIDADESD,
  TCAHORARIOSC,
  TCAMATRICES,
  TCADOCENTES,
  TCAHORARIOST,
  TCAPERIODOSA,
  TCATITULOSA,
} from '@prisma/client'

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

export async function getUnselectedActivities(
  idMatrix: number
): Promise<TCAACTIVIDADES[]> {
  const res = await prisma.tCAACTIVIDADES.findMany({
    where: {
      NOT: {
        TCAACTIVIDADESD: {
          some: {
            TCAMATRICES_ID: idMatrix,
          },
        },
      },
    },
  })
  return res
}

export interface ActivityOfMatrix extends TCAACTIVIDADESD {
  TCAACTIVIDADES: {
    TCAACTIVIDADES_DESCRIPCION: string
    TCAACTIVIDADES_OBLIGATORIA: boolean
  }
}

export async function getActivitiesOfMatrix(
  idMatrix: number,
  type: string
): Promise<ActivityOfMatrix[]> {
  const activitiesOfMatrix = await prisma.tCAACTIVIDADESD.findMany({
    where: {
      TCAMATRICES_ID: idMatrix,
      TCAACTIVIDADES: { TCAACTIVIDADES_TIPO: type },
    },
    select: {
      TCAACTIVIDADESD_ID: true,
      TCAMATRICES_ID: true,
      TCAACTIVIDADES_CODIGO: true,
      TCAACTIVIDADESD_HS: true,
      TCAACTIVIDADESD_HSP: true,
      TCAACTIVIDADES: {
        select: {
          TCAACTIVIDADES_DESCRIPCION: true,
          TCAACTIVIDADES_OBLIGATORIA: true,
        },
      },
    },
  })
  return activitiesOfMatrix
}

export async function getMatrices(state: string): Promise<TCAMATRICES[]> {
  const res = await prisma.tCAMATRICES.findMany({
    where: { TCAMATRICES_ESTADO: state },
  })
  return res
}

export async function getMatrixForPDF(idMatrix: number): Promise<MatrixForPDF> {
  const res: MatrixForPDF = await prisma.tCAMATRICES.findFirstOrThrow({
    where: { TCAMATRICES_ID: idMatrix },
    include: {
      TCAPERIODOSA: true,
      TCADOCENTES: true,
      TCAHORARIOST: true,
      TCAHORARIOSC: true,
      TCAACTIVIDADESD: true,
    },
  })
  return res
}

export async function getMatricesByIdBanner(
  idBanner: string
): Promise<TCAMATRICES[]> {
  const res = await prisma.tCAMATRICES.findMany({
    where: { TCADOCENTES_ID_BANNER: idBanner },
  })
  return res
}
