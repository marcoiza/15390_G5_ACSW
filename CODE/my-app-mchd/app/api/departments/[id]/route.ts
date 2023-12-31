import { NextRequest, NextResponse } from "next/server";
import type Department from '@/src/interfaces/department'
import prisma from '@/src/lib/db'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id)
    const data: Department | null = await prisma.tCADEPARTAMENTOS.findUnique({
        where: { TCADEPARTAMENTOS_ID: id },
    })
    return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
    const newData = await req.json()
    const data: Department = await prisma.tCADEPARTAMENTOS.create({
        data: newData
    })
    return NextResponse.json(data, { status: 201 })
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id)
    const newData = await req.json()
    const data: Department | null = await prisma.tCADEPARTAMENTOS.update({
        where: { TCADEPARTAMENTOS_ID: id },
        data: newData
    })
    return NextResponse.json(data, { status: 200 })
}