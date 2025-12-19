import type { GlobalConfig } from 'payload'
import { triggerRevalidate } from '../hooks/revalidateTags'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [({ req }) => triggerRevalidate(['contact'], req)],
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'pageTitle',
      type: 'text',
      defaultValue: 'Contact Us',
    },
    {
      name: 'pageDescription',
      type: 'textarea',
      defaultValue: 'Get in touch with questions about our driver education programs',
    },
  ],
}
