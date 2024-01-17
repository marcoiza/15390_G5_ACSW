import { NextRequest, NextResponse } from "next/server";
import type TCADOCENTES from '@/src/models/teacher'
import prisma from '@/src/libs/db'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id
    const data: TCADOCENTES | null = await prisma.tCADOCENTES.findUnique({
        where: { TCADOCENTES_ID_BANNER: id },
    })
    return NextResponse.json(data, { status: 200 })
}

export async function POST(req: NextRequest) {
    const newData = await req.json()
    const data: TCADOCENTES = await prisma.tCADOCENTES.create({
        data: newData
    })
    return NextResponse.json(data, { status: 201 })
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id
    const newData = await req.json()
    const data: TCADOCENTES | null = await prisma.tCADOCENTES.update({
        where: { TCADOCENTES_ID_BANNER: id },
        data: newData
    })
    return NextResponse.json(data, { status: 200 })
}