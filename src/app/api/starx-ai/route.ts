import { NextResponse } from 'next/server'
import { getCompeletion } from '@/libs/openai/api-call';

export async function GET() {
    const content = await getCompeletion()
    return NextResponse.json({ status: 200, data: content, message: "Success" })
  }