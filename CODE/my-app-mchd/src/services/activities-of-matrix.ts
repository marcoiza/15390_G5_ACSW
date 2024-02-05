import prisma from '@/src/libs/db'
import { TCAACTIVIDADESD } from '@prisma/client'
import { ActivityOfMatrix, getActivitiesOfMatrix } from '@/app/actions'
import { calculatePercentageOfHours } from '../libs/porcentaje-hour'

async function controlContractHoursToSaveMatrix(
  newActForMatrix: TCAACTIVIDADESD
): Promise<TCAACTIVIDADESD> {
  const { TCAACTIVIDADESD_ID, ...newActForMatrixWithOutId } = newActForMatrix
  const matrix = await prisma.tCAMATRICES.findUnique({
    where: { TCAMATRICES_ID: newActForMatrixWithOutId.TCAMATRICES_ID },
  })
  const contractHours = await prisma.tCADOCENTES.findUnique({
    where: { TCADOCENTES_ID_BANNER: matrix?.TCADOCENTES_ID_BANNER },
    select: { TCADOCENTES_HORAS_CONTRATO: true },
  })
  const ActivitiesHours =
    (matrix?.TCAMATRICES_IMPARTIR_CLASE ?? 0) +
    (matrix?.TCAMATRICES_INVESTIGACION ?? 0) +
    (matrix?.TCAMATRICES_GESTION_EDUCATIVA ?? 0) +
    (matrix?.TCAMATRICES_VINCULACION ?? 0)
  const availableHours =
    (contractHours?.TCADOCENTES_HORAS_CONTRATO ?? 0) - ActivitiesHours
  if ((newActForMatrixWithOutId.TCAACTIVIDADESD_HS ?? 0) > availableHours) {
    newActForMatrixWithOutId.TCAACTIVIDADESD_HS = availableHours
    newActForMatrixWithOutId.TCAACTIVIDADESD_HSP = calculatePercentageOfHours(
      availableHours,
      contractHours?.TCADOCENTES_HORAS_CONTRATO ?? 0
    )
  }
  const savedActForMatrix = await prisma.tCAACTIVIDADESD.create({
    data: { ...newActForMatrixWithOutId },
  })
  return savedActForMatrix
}

async function controlContractHoursToUpdateMatrix(
  oldActivityHours: number,
  newActForMatrix: TCAACTIVIDADESD
): Promise<TCAACTIVIDADESD> {
  const matrix = await prisma.tCAMATRICES.findUnique({
    where: { TCAMATRICES_ID: newActForMatrix.TCAMATRICES_ID },
  })
  const contractHours = await prisma.tCADOCENTES.findUnique({
    where: { TCADOCENTES_ID_BANNER: matrix?.TCADOCENTES_ID_BANNER },
    select: { TCADOCENTES_HORAS_CONTRATO: true },
  })
  const ActivitiesHours =
    (matrix?.TCAMATRICES_IMPARTIR_CLASE ?? 0) +
    (matrix?.TCAMATRICES_INVESTIGACION ?? 0) +
    (matrix?.TCAMATRICES_GESTION_EDUCATIVA ?? 0) +
    (matrix?.TCAMATRICES_VINCULACION ?? 0)
  const availableHours =
    (contractHours?.TCADOCENTES_HORAS_CONTRATO ?? 0) -
    ActivitiesHours +
    oldActivityHours
  if ((newActForMatrix.TCAACTIVIDADESD_HS ?? 0) > availableHours) {
    newActForMatrix.TCAACTIVIDADESD_HS = availableHours
    newActForMatrix.TCAACTIVIDADESD_HSP = calculatePercentageOfHours(
      availableHours,
      contractHours?.TCADOCENTES_HORAS_CONTRATO ?? 0
    )
  }
  const updatedActForMatrix = await prisma.tCAACTIVIDADESD.update({
    where: { TCAACTIVIDADESD_ID: newActForMatrix.TCAACTIVIDADESD_ID },
    data: { ...newActForMatrix },
  })
  return updatedActForMatrix
}

async function addHourInActivityCategory(
  idMatrix: number,
  newHour: number,
  oldHour: number,
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
            (matrix?.TCAMATRICES_IMPARTIR_CLASE ?? 0) + newHour - oldHour,
        },
      })
      break
    case 'inv':
      await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: matrix?.TCAMATRICES_ID },
        data: {
          TCAMATRICES_INVESTIGACION:
            (matrix?.TCAMATRICES_INVESTIGACION ?? 0) + newHour - oldHour,
        },
      })
      break
    case 'ges':
      await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: matrix?.TCAMATRICES_ID },
        data: {
          TCAMATRICES_GESTION_EDUCATIVA:
            (matrix?.TCAMATRICES_GESTION_EDUCATIVA ?? 0) + newHour - oldHour,
        },
      })
      break
    case 'vin':
      await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: matrix?.TCAMATRICES_ID },
        data: {
          TCAMATRICES_VINCULACION:
            (matrix?.TCAMATRICES_VINCULACION ?? 0) + newHour - oldHour,
        },
      })
      break
    default:
      break
  }
}

export async function addActInMatrix(
  newActForMatrix: TCAACTIVIDADESD
): Promise<TCAACTIVIDADESD> {
  const { TCAACTIVIDADESD_ID, ...newActForMatrixWithOutId }: TCAACTIVIDADESD =
    newActForMatrix
  const savedActForMatrix = await controlContractHoursToSaveMatrix(
    newActForMatrix
  )
  const typeAct = await prisma.tCAACTIVIDADES.findUnique({
    where: { TCAACTIVIDADES_CODIGO: savedActForMatrix.TCAACTIVIDADES_CODIGO },
    select: { TCAACTIVIDADES_TIPO: true },
  })
  await addHourInActivityCategory(
    newActForMatrixWithOutId.TCAMATRICES_ID,
    newActForMatrixWithOutId.TCAACTIVIDADESD_HS ?? 0,
    0,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  const activitiesByMatrix = await getActivitiesOfMatrix(
    newActForMatrixWithOutId.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return savedActForMatrix
}

export async function updateActInMatrix(
  newActForMatrix: TCAACTIVIDADESD
): Promise<TCAACTIVIDADESD> {
  const oldActForMatrix = await prisma.tCAACTIVIDADESD.findUnique({
    where: { TCAACTIVIDADESD_ID: newActForMatrix.TCAACTIVIDADESD_ID },
  })
  const updatedActForMatrix = await controlContractHoursToUpdateMatrix(
    oldActForMatrix?.TCAACTIVIDADESD_HS ?? 0,
    newActForMatrix
  )
  const typeAct = await prisma.tCAACTIVIDADES.findUnique({
    where: { TCAACTIVIDADES_CODIGO: updatedActForMatrix.TCAACTIVIDADES_CODIGO },
    select: { TCAACTIVIDADES_TIPO: true },
  })
  await addHourInActivityCategory(
    newActForMatrix.TCAMATRICES_ID,
    newActForMatrix.TCAACTIVIDADESD_HS ?? 0,
    oldActForMatrix?.TCAACTIVIDADESD_HS ?? 0,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  const activitiesByMatrix = await getActivitiesOfMatrix(
    newActForMatrix.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return updatedActForMatrix
}

export async function deleteActivityOfMatrix(
  idActivityOfMatrix: number
): Promise<ActivityOfMatrix[]> {
  const deletedData = await prisma.tCAACTIVIDADESD.delete({
    where: { TCAACTIVIDADESD_ID: idActivityOfMatrix },
  })
  const typeAct = await prisma.tCAACTIVIDADES.findUnique({
    where: { TCAACTIVIDADES_CODIGO: deletedData.TCAACTIVIDADES_CODIGO },
    select: { TCAACTIVIDADES_TIPO: true },
  })
  await addHourInActivityCategory(
    deletedData.TCAMATRICES_ID,
    0,
    deletedData.TCAACTIVIDADESD_HS ?? 0,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  const activitiesByMatrix = await getActivitiesOfMatrix(
    deletedData.TCAMATRICES_ID,
    typeAct?.TCAACTIVIDADES_TIPO ?? ''
  )
  return activitiesByMatrix
}
