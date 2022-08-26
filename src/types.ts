type FilePath = string
export type BlogPost = {
  title: string
  description: string
  image: FilePath
  author: FilePath
  publishDate: string
  updateDate?: string | undefined
}

export type Author = {
  name: string
  image: string
  description: string
  email: string
  twitter: string
  url: string
}
