import { NextResponse } from 'next/server';
import type Teacher from '@/src/interfaces/teacher';
import prisma from '@/src/lib/db';

export async function GET() {
    const data: Teacher[] = await prisma.tCADOCENTES.findMany()
    return NextResponse.json(data, { status: 200 });
}