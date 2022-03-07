import Head from 'next/head';

export default function Meta ({ title, keywords, description }){
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta charSet='utf-8' />

      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest"></link>

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <title>{title}</title>

    </Head>
  )
}

Meta.defaultProps = {
  title: 'Responsive cards',
  keywords: 'keywords',
  description: 'description',
}