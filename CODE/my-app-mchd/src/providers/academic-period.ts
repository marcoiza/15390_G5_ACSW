import type AcademicPeriod from '@/src/interfaces/academic-period'

export const getAll = async (): Promise<AcademicPeriod[]> => {
  const res = await fetch('localhost:3000/api/academic-periods')
  if (!res.ok) {
    throw new Error('Failed to fetch academic periods')
  }
  return res.json()
}
