import { NextRequest, NextResponse } from "next/server";
import type Matrix from '@/src/interfaces/matrix'
import prisma from '@/src/lib/db'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id)
    const data: Matrix | null = await prisma.tCAMATRICES.findUnique({
        where: { TCAMATRICES_ID: id },
    })
    return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
    const newData = await req.json()
    const data: Matrix = await prisma.tCAMATRICES.create({
        data: newData
    })
    return NextResponse.json(data, { status: 201 })
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id)
    const newData = await req.json()
    const data: Matrix | null = await prisma.tCAMATRICES.update({
        where: { TCAMATRICES_ID: id },
        data: newData
    })
    return NextResponse.json(data, { status: 200 })
}