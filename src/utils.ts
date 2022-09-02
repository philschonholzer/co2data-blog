import type { ImageMetadata } from '@astrojs/image'
import type { NewType } from './newtype'

export const formatDate = (isoDate: string) =>
  new Date(isoDate).toISOString().split('T').at(0)

type Slug = NewType<'Slug', string>
export const slugFromUrl = (authorUrl: string) =>
  authorUrl.split('/').at(-1) as Slug

export const authorMdx = async <T>(author: Slug): Promise<T> =>
  await import(`./pages/author/${author}/index.mdx`)
export const authorImage = async (author: Slug): Promise<ImageMetadata> =>
  (await import(`./pages/author/${author}/image.jpg`)).default
