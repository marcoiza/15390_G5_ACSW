import { NextResponse } from 'next/server';
import type Matrix from '@/src/interfaces/matrix';
import prisma from '@/src/lib/db';

export async function GET() {
    const data: Matrix[] = await prisma.tCAMATRICES.findMany()
    return NextResponse.json(data, { status: 200 });
}