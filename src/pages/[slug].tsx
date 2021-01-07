import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FC } from 'react';
import { Layout } from '../components/Layout';
import { nav } from '../components/Nav';
import { Title } from '../components/pages/Title';

type Props = {
  title: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: nav
      .filter((item) => item.path !== '/')
      .map((item) => {
        return {
          params: {
            slug: item.name,
          },
        };
      }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) return { props: {} };
  const { slug } = params;
  return {
    props: {
      title: slug,
    },
  };
};

const TitlePage: FC<Props> = (props) => {
  const { title } = props;
  return (
    <Layout>
      <Title title={title} />
    </Layout>
  );
};

export default TitlePage;
