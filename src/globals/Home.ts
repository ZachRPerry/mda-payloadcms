import type { GlobalConfig } from 'payload'
import { triggerRevalidate } from '../hooks/revalidateTags'

export const Home: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [({ req }) => triggerRevalidate(['home'], req)],
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title (leave blank to use hero title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO meta description',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'Comma-separated keywords',
          },
        },
      ],
    },
    {
      name: 'heroTitle',
      type: 'text',
      required: false,
    },
    {
      name: 'heroDescription',
      type: 'textarea',
    },
    {
      name: 'heroCtaLabel',
      type: 'text',
    },
    {
      name: 'heroCtaLink',
      type: 'text',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'features',
      type: 'array',
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      fields: [
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Emoji or short icon text (e.g., ❤️, ✓, 🚗)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
    {
      name: 'learningOptions',
      type: 'array',
      labels: {
        singular: 'Learning Option',
        plural: 'Learning Options',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'bullets',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'ctaLabel',
          type: 'text',
        },
        {
          name: 'ctaLink',
          type: 'text',
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      labels: {
        singular: 'Step',
        plural: 'Steps',
      },
      fields: [
        {
          name: 'stepNumber',
          type: 'number',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
  ],
}
