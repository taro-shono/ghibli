import { FC } from 'react';
import NextImage, { ImageProps } from 'next/image';

type Props = {} & ImageProps;

const Image: FC<Props> = ({ src, ...other }) => {
  return <NextImage src={src} {...other} />;
};

export { Image };
