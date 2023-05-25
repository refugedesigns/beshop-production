import React from 'react'
import Head  from 'next/head'

const NextHead = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta charSet="UTF-8" />
      <meta name="author" content="Erasmus Antwi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default NextHead