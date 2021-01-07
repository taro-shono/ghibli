import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { ImageDetail } from '../../components/pages/ImageDetail';

type Props = {
  id: string;
  title: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) return { props: {} };
  const { slug, id } = params;

  if (Number(id) < 1 || Number(id) > 50) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
      title: slug,
    },
  };
};

const TitlePage: FC<Props> = (props) => {
  return (
    <Layout>
      <ImageDetail {...props} />
    </Layout>
  );
};

export default TitlePage;
