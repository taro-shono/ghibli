import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  ogpImageUrl?: string;
}

export const Meta: React.FC<Props> = (props) => {
  const {
    title = 'unofficial ghibli photo',
    description = '',
    ogpImageUrl = '',
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogpImageUrl} />
      {/* TODO: add project url */}
      {/* <meta property="og:url" content="" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogpImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
