import { FC } from 'react';
import NextImage, { ImageProps } from 'next/image';

type Props = {} & ImageProps;

const Image: FC<Props> = (props) => {
  return <NextImage {...props} />;
};

export { Image };
