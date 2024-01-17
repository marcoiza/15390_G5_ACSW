import type { NextApiRequest, NextApiResponse } from 'next'
import type Department from '@/src/models/department'
import prisma from '@/src/libs/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Department>
) {
    const data = await prisma.tCADEPARTAMENTOS.create({
        data: req.body
    })
    res.status(201).json(data)
}