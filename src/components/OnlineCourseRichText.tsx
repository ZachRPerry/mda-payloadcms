import { RichText } from '@payloadcms/richtext-lexical/react'
import type { OnlinePartnership } from '@/payload-types'

export function OnlineCourseRichText({ content }: { content: OnlinePartnership['description'] }) {
  if (!content) return null
  return <RichText data={content} />
}
