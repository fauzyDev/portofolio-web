import { NextResponse, NextRequest } from 'next/server'
import { getCompeletion } from '@/libs/openai/api-call';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    const content = await getCompeletion(message)
    return NextResponse.json({ status: 200, data: content, message: "Success" })
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}