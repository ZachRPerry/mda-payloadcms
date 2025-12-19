import type { PayloadRequest } from 'payload'

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SERVER_URL) return process.env.NEXT_PUBLIC_SERVER_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  const port = process.env.PORT || '3000'
  return `http://localhost:${port}`
}

export const triggerRevalidate = async (tags: string[], req?: PayloadRequest) => {
  const token = process.env.REVALIDATE_TOKEN
  if (!token) {
    req?.payload?.logger?.warn?.('REVALIDATE_TOKEN is missing; skipping on-demand revalidation')
    return
  }

  const baseUrl = getBaseUrl()

  try {
    await fetch(`${baseUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ tags }),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    req?.payload?.logger?.error?.(`Failed to trigger revalidation: ${message}`)
  }
}
