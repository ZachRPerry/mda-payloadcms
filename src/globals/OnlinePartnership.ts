import type { GlobalConfig } from 'payload'
import { triggerRevalidate } from '../hooks/revalidateTags'

export const OnlinePartnership: GlobalConfig = {
  slug: 'online-partnership',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [({ req }) => triggerRevalidate(['online-partnership'], req)],
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
      defaultValue: 'Online Course Partnership',
    },
    {
      name: 'partnerName',
      type: 'text',
      required: true,
      defaultValue: 'Aceable Inc',
    },
    {
      name: 'partnerLink',
      type: 'text',
      required: true,
      defaultValue: 'http://go.aceable.com/aff_c?offer_id=10&aff_id=1022',
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'ctaButtonText',
      type: 'text',
      defaultValue: 'Visit Aceable Inc Today',
    },
  ],
}
