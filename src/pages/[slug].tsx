import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FC } from 'react';
import { Layout } from '../components/Layout';
import { nav } from '../components/Nav';
import { Title } from '../components/pages/Title';

type Props = {
  title: string;
};
type Paths = {
  locale: string;
  params: {
    slug: string;
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  if (!locales) return { paths: [], fallback: false };
  const paths = locales.reduce(
    (prev, current) => [
      ...prev,
      ...nav.map((item) => ({
        params: {
          slug: item.name,
        },
        locale: current,
      })),
    ],
    [] as Paths[],
  );

  return {
    paths,
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
