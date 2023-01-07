import type { CollectionEntry } from 'astro:content'

export type BlogCollection = CollectionEntry<'blog'>
export type BlogPost = CollectionEntry<'blog'>['data']

export type AuthorCollection = CollectionEntry<'author'>
export type Author = CollectionEntry<'author'>['data']
