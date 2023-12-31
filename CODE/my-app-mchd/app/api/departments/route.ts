import { NextResponse } from 'next/server';
import type Department from '@/src/interfaces/department';
import prisma from '@/src/lib/db';

export async function GET() {
    const data: Department[] = await prisma.tCADEPARTAMENTOS.findMany()
    return NextResponse.json(data, { status: 200 });
}