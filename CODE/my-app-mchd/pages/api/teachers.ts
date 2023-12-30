import type { NextApiRequest, NextApiResponse } from 'next'
import type Teacher from '@/src/interfaces/teacher'
import prisma from '@/src/lib/db'

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Teacher[]>
) {
    const data = await prisma.tCADOCENTES.findMany()
    res.status(200).json(data)
}