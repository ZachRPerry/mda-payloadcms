import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // Create contact submission
    await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        phone,
        subject,
        message,
        status: 'new',
      },
    })

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ error: 'Failed to process contact form' }, { status: 500 })
  }
}
