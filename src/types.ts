export type BlogPost = {
  title: string
  description: string
  image: string
  author: string
  publishDate: string
  updateDate?: string | undefined
}

export type Author = {
  name: string
  image: string
  description: string
  email: string
  twitter: string
}
