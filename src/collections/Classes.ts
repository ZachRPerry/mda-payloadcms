import type { CollectionConfig } from 'payload'
import { triggerRevalidate } from '../hooks/revalidateTags'

export const Classes: CollectionConfig = {
  slug: 'classes',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'startDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'schedule',
      type: 'textarea',
      required: true,
      admin: {
        description: 'e.g., "Monday - Thursday 5:30 PM - 9:30 PM"',
      },
    },
    {
      name: 'totalSeats',
      type: 'number',
      required: true,
      min: 1,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'open',
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Full', value: 'full' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Completed', value: 'completed' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Additional notes or requirements for this class',
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [({ req }) => triggerRevalidate(['classes'], req)],
    afterDelete: [({ req }) => triggerRevalidate(['classes'], req)],
  },
}
