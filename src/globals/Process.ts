import type { GlobalConfig } from 'payload'
import { triggerRevalidate } from '../hooks/revalidateTags'

export const Process: GlobalConfig = {
  slug: 'process',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [({ req }) => triggerRevalidate(['process'], req)],
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroDescription',
      type: 'textarea',
    },
    // In-person classroom flow
    {
      name: 'inPersonSteps',
      type: 'array',
      required: false,
      admin: { description: 'Steps for the in-person classroom path' },
      fields: [
        { name: 'stepNumber', type: 'number', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'icon', type: 'upload', relationTo: 'media' },
      ],
    },

    // Online course flow
    {
      name: 'onlineSteps',
      type: 'array',
      required: false,
      admin: { description: 'Steps for the online course path' },
      fields: [
        { name: 'stepNumber', type: 'number', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'icon', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'additionalInfo',
      type: 'richText',
    },
  ],
}
