import type { getPicture } from '@astrojs/image'
import type { NewType } from './newtype'
type ImageResult = ReturnType<typeof getPicture>
export const formatDate = (isoDate: string | Date) => {
  const date = typeof isoDate === 'string' ? new Date(isoDate) : isoDate
  return date.toISOString().split('T').at(0)
}
type Slug = NewType<'Slug', string>
export const slugFromUrl = (url: string | undefined) => url?.split('/').at(-2)

export const authorMdx = async <T>(author: Slug): Promise<T> =>
  await import(`./content/author/${author}/index.mdx`)
export const authorImage = async (
  author: string | undefined
): Promise<ImageResult | undefined> =>
  (await import(`./content/author/${author}/image.jpg`)).default
