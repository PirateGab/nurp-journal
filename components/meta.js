import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
             
       <link rel="shortcut icon" type="icon" href="image pour le site\nurp_icone_du_site.ico" ></link>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"

      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and Sanity.io.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="google-site-verification" content="S72fKjdWSVQGBqP2T6QK4is_W3PKQJPAVZPPXIVXTx0" />
    </Head>
  )
}
