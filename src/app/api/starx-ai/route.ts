import { NextResponse } from 'next/server'
import { getCompeletion } from '@/libs/openai/api-call';

export async function POST( message: string ) {
    const content = await getCompeletion(message)
    return NextResponse.json({ status: 200, data: content, message: "Success" })
  }