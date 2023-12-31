import { NextResponse } from 'next/server';
import type AcademicTitle from '@/src/interfaces/academic-title';
import prisma from '@/src/lib/db';

export async function GET() {
    const data: AcademicTitle[] = await prisma.tCATITULOSA.findMany()
    return NextResponse.json(data, { status: 200 });
}