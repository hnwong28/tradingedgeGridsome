import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
    authors: [
      {
        _type: 'authorReference',
        author: {
          _ref: '1b1c7451-c976-48fd-b416-73bf5a356f10',
          _type: 'reference'
        }
      }
    ]
  }),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'Summary'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
