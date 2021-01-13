import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  description?: string;
  ogpImageUrl?: string;
}

export const Meta: React.FC<Props> = (props) => {
  const {
    title = 'unofficial ghibli gallery',
    description = 'ghibli pictures gallery',
    ogpImageUrl = '',
  } = props;
  const { locale } = useRouter();
  const url = `https://ghibli.vercel.app${locale === 'en' ? '' : `/${locale}`}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogpImageUrl} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogpImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="alternate" href={url} hrefLang={locale} />
    </Head>
  );
};
