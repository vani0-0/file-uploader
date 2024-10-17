import structure from '@/structure.json'

export const siteConfig = {
  title: structure.name,
  description: structure.description,
  keywords: 'file uploader, tailwindcss',
  author: structure.author.name,
  ogImage: structure.image,
  url: structure.url,
  links: {
    github: 'https://github.com/vani0-0/file-uploader',
  },
}

export type SiteConfig = typeof siteConfig
