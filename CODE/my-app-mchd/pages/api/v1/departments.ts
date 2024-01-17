import type { NextApiRequest, NextApiResponse } from 'next'
import type Department from '@/src/models/department'
import prisma from '@/src/libs/db'

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Department[]>
) {
    const data = await prisma.tCADEPARTAMENTOS.findMany()
    res.status(200).json(data)
}