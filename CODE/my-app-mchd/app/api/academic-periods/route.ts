import { NextResponse } from 'next/server';
import type TCAPERIODOSA from '@/src/models/academic-period';
import prisma from '@/src/libs/db';

export async function GET() {
    const data: TCAPERIODOSA[] = await prisma.tCAPERIODOSA.findMany()
    return NextResponse.json(data, { status: 200 });
}