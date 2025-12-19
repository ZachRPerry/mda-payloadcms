import type { GlobalConfig } from 'payload'
import { triggerRevalidate } from '../hooks/revalidateTags'

export const Schedule: GlobalConfig = {
  slug: 'schedule',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [({ req }) => triggerRevalidate(['schedule'], req)],
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
      defaultValue: 'Upcoming Classes',
    },
    {
      name: 'pageDescription',
      type: 'textarea',
      defaultValue:
        'View our schedule and register for an upcoming in-person driver education class',
    },
  ],
}
