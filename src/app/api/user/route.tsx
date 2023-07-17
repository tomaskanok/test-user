import prisma from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const result = await prisma.user.create({
    data: { ... await request.json() }
  })
  return NextResponse.json(result)
}