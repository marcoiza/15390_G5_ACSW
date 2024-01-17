import { NextResponse } from 'next/server';
import type TCADOCENTES from '@/src/models/teacher';
import prisma from '@/src/libs/db';

export async function GET() {
    const data: TCADOCENTES[] = await prisma.tCADOCENTES.findMany()
    return NextResponse.json(data, { status: 200 });
}