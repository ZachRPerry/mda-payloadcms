import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization')
  const token = process.env.REVALIDATE_TOKEN

  if (!token || authHeader !== `Bearer ${token}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { tags = [] } = await request.json()

  tags.forEach((tag: string) => revalidateTag(tag))

  return NextResponse.json({ revalidated: true, tags })
}
