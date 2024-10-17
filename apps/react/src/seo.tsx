import { siteConfig } from '@/config/site'
import { Helmet } from 'react-helmet-async'

function Seo() {
  return (
    <Helmet>
      <title>{siteConfig.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta name="author" content={siteConfig.author} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:image" content={siteConfig.ogImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteConfig.url} />
      <meta property="twitter:title" content={siteConfig.title} />
      <meta property="twitter:description" content={siteConfig.description} />
      <meta property="twitter:image" content={siteConfig.ogImage} />

      <link rel="github" href={siteConfig.links.github} />

      <script type="application/ld+json">
        {JSON.stringify(import('@/structure.json'))}
      </script>
    </Helmet>
  )
}

export default Seo
