import type { GlobalConfig } from 'payload'
import { triggerRevalidate } from '../hooks/revalidateTags'

export const Registration: GlobalConfig = {
  slug: 'registration',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [({ req }) => triggerRevalidate(['registration'], req)],
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
      defaultValue: 'Registration',
    },
    {
      name: 'pageDescription',
      type: 'textarea',
    },
    {
      name: 'classRegistrationForm',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Class Registration Form',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'formFile',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    {
      name: 'behindTheWheelForm',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Behind The Wheel Training Form',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'formFile',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
