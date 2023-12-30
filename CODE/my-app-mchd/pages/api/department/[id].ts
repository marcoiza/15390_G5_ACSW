import type { NextApiRequest, NextApiResponse } from 'next'
import type Department from '@/src/interfaces/department'
import prisma from '@/src/lib/db'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Department | null>
) {
  const { query, method } = req
  const id = parseInt(query.id as string, 10)
  const name = query.name as string

  switch (method) {
    case 'GET':
      const data = await prisma.tCADEPARTAMENTOS.findUnique({
        where: {
          TCADEPARTAMENTOS_ID: id
        }
      })
      res.status(200).json(data)
      break
    case 'PUT':
      const newData = await prisma.tCADEPARTAMENTOS.update({
        where: {
          TCADEPARTAMENTOS_ID: id
        },
        data: req.body
      })
      res.status(200).json(newData)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}