import type { TCAPERIODOSA } from '@prisma/client'

export const getAll = async (): Promise<TCAPERIODOSA[]> => {
  const res = await fetch('localhost:3000/api/academic-periods')
  if (!res.ok) {
    throw new Error('Failed to fetch academic periods')
  }
  return res.json()
}
