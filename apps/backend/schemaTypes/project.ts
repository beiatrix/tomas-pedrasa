import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'Name of project',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      description: 'This defines the project page URL – click "Generate" to automatically create one',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'category',
      description: 'Category of the project',
      title: 'Category',
      type: 'string'
    }),
    defineField({
      name: 'images',
      description: 'Project images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      description: 'Hide this project from the home page – useful for viewing in-progress pages at /projects/[slug]'
    })
  ]
})
