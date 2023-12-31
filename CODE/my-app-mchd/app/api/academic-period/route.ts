import { NextResponse } from 'next/server';
import type AcademicPeriod from '@/src/interfaces/academic-period';
import prisma from '@/src/lib/db';

export async function GET() {
    const data: AcademicPeriod[] = await prisma.tCAPERIODOSA.findMany()
    return NextResponse.json(data, { status: 200 });
}