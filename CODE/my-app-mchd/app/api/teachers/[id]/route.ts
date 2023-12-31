import { NextRequest, NextResponse } from "next/server";
import type Teacher from '@/src/interfaces/teacher'
import prisma from '@/src/lib/db'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id
    const data: Teacher | null = await prisma.tCADOCENTES.findUnique({
        where: { TCADOCENTES_ID_BANNER: id },
    })
    return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
    const newData = await req.json()
    const data: Teacher = await prisma.tCADOCENTES.create({
        data: newData
    })
    return NextResponse.json(data, { status: 201 })
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id
    const newData = await req.json()
    const data: Teacher | null = await prisma.tCADOCENTES.update({
        where: { TCADOCENTES_ID_BANNER: id },
        data: newData
    })
    return NextResponse.json(data, { status: 200 })
}