import { NextRequest, NextResponse } from 'next/server'

export default function withErrorHandler(
  fn: (request: NextRequest, ...args: any) => Promise<NextResponse>
) {
  return async function (request: NextRequest, ...args: any) {
    try {
      return await fn(request, ...args)
    } catch (error) {
      console.error(error, 'requestBody:', request, 'location:', fn.name)
      return NextResponse.json(
        { message: 'Internal Server Error' },
        { status: 500 }
      )
    }
  }
}
