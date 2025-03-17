import type { Image } from '.'

export interface Project {
  _id: string
  _createdAt: string
  _rev: string
  _type: string
  _updatedAt: string
  slug: {
    current: string
    _type: string
  },
  title: string
  category: string
  images: Image[]
  hidden: boolean
}
